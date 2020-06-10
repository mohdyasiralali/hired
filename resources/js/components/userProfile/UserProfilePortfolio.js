import React from "react";
import user from "../../AuthenticatedUser";

class UserProfilePortfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: ""
        };

        this.renderImages = this.renderImages.bind(this);
        this.renderProjects = this.renderProjects.bind(this);

        this.onChangeFile = this.onChangeFile.bind(this);
    }

    onClickProjectLink(e) {
        window.open("https://www.geeksforgeeks.org", "_blank");
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

    onClickUpload(){
        const url = '/portfolio/fileupload';
        const formData = {file: this.state.image}
        return  axios.post(url, formData)
                .then(response => console.log(response))
      }

    renderProjects() {
        return (
            <div
                className="col-lg-4 col-md-4 col-sm-8 mb-2 link-div--onhover"
                onClick={this.onClickProjectLink.bind(this)}
            >
                <div
                    className="p-1 overflow-auto bg-primary d-flex"
                    style={{ borderRadius: "50px" }}
                >
                    <div
                        className="bg-light btn-round mr-3 text-center"
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%"
                        }}
                    >
                        <div className="w-100 h-100">
                            <i className="fas fa-link fa-2x mt-2"></i>
                        </div>
                    </div>
                    <div className="text-center text-light">
                        <h5 className="mt-3">Hired</h5>
                    </div>
                </div>
            </div>
        );
    }

    renderImages() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-6 mb-2">
                <img
                    className="img-fluid rounded"
                    src="/storage/images/change.jpg"
                    alt=""
                ></img>
            </div>
        );
    }

    render() {
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
                                <span className="btn btn-primary btn-file btn-round">
                                    <i className="fas fa-plus"></i>
                                    <input
                                        type="file"
                                        onChange={this.onChangeFile}
                                    ></input>
                                </span>
                            </div>
                            <div className="row">{this.renderImages()}</div>
                        </div>
                        <div>
                            <div className="d-flex  mb-3">
                                <h4 className="text-primary mr-3">
                                    <b>Projects</b>
                                </h4>
                                <button className="btn btn-primary btn-round btn-sm">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                            <div className="row">{this.renderProjects()}</div>
                        </div>
                    </div>
                </div>{" "}
                {/* <!-- Modal --> */}
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
            </section>
        );
    }
}

export default UserProfilePortfolio;
