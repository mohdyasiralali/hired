import React from "react";
import { user } from "../../AuthenticatedUser";

class UserProfilePortfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            links: [],
            image: "",

            link_title: "",
            link_url: ""
        };

        this.renderImages = this.renderImages.bind(this);
        this.renderProjects = this.renderProjects.bind(this);

        this.onChangeFile = this.onChangeFile.bind(this);
        this.onClickProjectLink = this.onClickProjectLink.bind(this);
    }

    componentDidMount() {
        this.axs();
    }
    axs() {
        let stateImages = [],
            stateLinks = [];
        axios
            .get("/portfolio/images/" + this.props.profile_id)
            .then(response => {
                this.setState({ images: response.data });
                // stateImages = response.data;
            });

        axios
            .get("/portfolio/links/" + this.props.profile_id)
            .then(response => {
                // stateLinks = response.data;
                this.setState({ links: response.data });
            });

        // this.setState({ images: stateImages, links: stateLinks });
    }

    onClickProjectLink(e, link) {
        console.log(link);
        window.open(link.link);
    }

    onChangeFile(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
        $("#previewModal").modal("show");
    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }

    onClickUpload() {
        const url = "/portfolio/fileupload";
        const formData = {
            file: this.state.image,
            profile_id: this.props.profile_id
        };
        let stateImages = this.state.images;
        return axios.post(url, formData).then(response => {
            stateImages.push(response.data);
            this.setState({ images: stateImages });
            $("#previewModal").modal("hide");
        });
    }

    onClickAddLink() {
        $("#linkModal").modal("show");
    }

    onChangeLinkTitle(e) {
        this.setState({ link_title: e.target.value });
    }

    onChangeLinkURL(e) {
        this.setState({ link_url: e.target.value });
    }

    onClickSubmitLink(e) {
        e.preventDefault();
        let data = {
            title: this.state.link_title,
            url: this.state.link_url,
            profile_id: this.props.profile_id
        };
        let stateLinks = this.state.links;
        axios.post("/portfolio/addlink", data).then(response => {
            // console.log(response.data);
            stateLinks.push(response.data);
            this.setState({ links: stateLinks });
        });
        $("#linkModal").modal("hide");
    }

    renderProjects() {
        return this.state.links.map(link => {
            return (
                <div
                    className="col-lg-4 col-md-4 col-sm-8 mb-2 link-div--onhover"
                    onClick={e => this.onClickProjectLink(e, link)}
                    key={link.id}
                >
                    <div
                        className="p-1 overflow-auto bg-primary d-flex"
                        style={{ borderRadius: "50px" }}
                    >
                        <div
                            className="bg-light btn-round mr-3 text-center"
                            style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "50%"
                            }}
                        >
                            <div className="w-75 h-75 mx-auto mt-2">
                                {/* <i className="fas fa-link fa-2x mt-2"></i> */}
                                <img
                                    className="img-fluid"
                                    src="/storage/images/link.png"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="text-center text-light">
                            <h5 className="mt-3">{link.title}</h5>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderImages() {
        return this.state.images.map(image => {
            let src = "/storage/images/portfolio/" + image.img_src;
            return (
                <div key={image.id} className="col-lg-4 col-md-4 col-sm-6 mb-2">
                    <img
                        className="img-fluid rounded mx-auto"
                        src={src}
                        style={{ maxHeight: "200px" }}
                        alt=""
                    ></img>
                </div>
            );
        });
    }

    render() {
        let hidden = false;
        if (this.props.user_id !== user.user_id) {
            hidden = true;
        }
        return (
            <section className="my-5">
                <div className="container p-5 bg-light rounded">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Portfolio</b>
                                </h3>
                                <h6>
                                    <b>MY WORK</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="container px-5 mt-4">
                        <div className="mb-3">
                            <div className="d-flex  mb-3">
                                <h4 className="text-primary mr-3">
                                    <b>Gallery</b>
                                </h4>
                                <span
                                    className="btn btn-primary btn-file btn-round"
                                    hidden={hidden}
                                >
                                    <i className="fas fa-plus"></i>
                                    <input
                                        type="file"
                                        onChange={this.onChangeFile}
                                        hidden={hidden}
                                    ></input>
                                </span>
                            </div>
                            <div className="row">{this.renderImages()}</div>
                        </div>
                        <div className="mt-5">
                            <div className="d-flex my-3">
                                <h4 className="text-primary mr-3">
                                    <b>Projects</b>
                                </h4>
                                <button
                                    className="btn btn-primary btn-round btn-sm"
                                    onClick={this.onClickAddLink.bind(this)}
                                    hidden={hidden}
                                >
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="row">{this.renderProjects()}</div>
                        </div>
                    </div>
                </div>{" "}
                {/* <!-- Modal Image --> */}
                <div
                    className="modal fade"
                    id="previewModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="previewModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="previewModalLabel"
                                >
                                    Upload Image
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <img
                                        className="w-100"
                                        src={this.state.image}
                                    />
                                </div>
                                <div className="my-3 text-right">
                                    <button
                                        className="btn btn-primary btn-round"
                                        onClick={this.onClickUpload.bind(this)}
                                    >
                                        <i className="fas fa-upload mr-3"></i>
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal Link --> */}
                <div
                    className="modal fade"
                    id="linkModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="linkModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="linkModalLabel">
                                    Add Project Link
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container p-3">
                                    <form
                                        onSubmit={this.onClickSubmitLink.bind(
                                            this
                                        )}
                                    >
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                className="form-control"
                                                value={this.state.link_title}
                                                onChange={this.onChangeLinkTitle.bind(
                                                    this
                                                )}
                                                required
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Link</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                value={this.state.link_url}
                                                onChange={this.onChangeLinkURL.bind(
                                                    this
                                                )}
                                                required
                                            ></input>
                                        </div>
                                        <div className="my-3 text-right">
                                            <button className="btn btn-primary btn-round">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfilePortfolio;
