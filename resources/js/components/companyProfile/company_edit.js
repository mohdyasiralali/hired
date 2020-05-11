import React from "react";
import Skills from "./skills";
import Swal from "sweetalert2";

class CompanyEditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            indusrty: "",
            headquarter: "",
            website: "",
            overview: "",
            sys_skills: [],
            skills: []
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIndusrty = this.onChangeIndusrty.bind(this);
        this.onChangeHeadquarter = this.onChangeHeadquarter.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeOverview = this.onChangeOverview.bind(this);
        this.onSubmitSave = this.onSubmitSave.bind(this);
    }

    componentDidMount() {
        this.get_skills();
    }

    get_skills() {
        axios
            .get("/skills")
            .then(response => {
                // console.log("SKILLS", response.data);
                return response.data;
            })
            .then(json => {
                this.setState({ sys_skills: json });
            });
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeIndusrty(e) {
        this.setState({ indusrty: e.target.value });
    }
    onChangeHeadquarter(e) {
        this.setState({ headquarter: e.target.value });
    }
    onChangeWebsite(e) {
        this.setState({ website: e.target.value });
    }
    onChangeOverview(e) {
        this.setState({ overview: e.target.value });
    }

    return_skills(skills) {
        this.setState({ skills: skills });
    }

    onSubmitSave(e) {
        e.preventDefault();
        console.log(this.state);

        let post = {
            name: this.state.name,
            industry: this.state.indusrty,
            headquarter: this.state.headquarter,
            website: this.state.website,
            overview: this.state.overview,
            skills: this.state.skills
        };
        axios.post("/company/create", post).then(response => {
            if (response.data.message === "added") {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Successfully Created",
                    showConfirmButton: false,
                    timer: 2000
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        });
        $("#createPage").modal("hide");
    }

    render() {
        let my = "";
        let header = "Create Company Profile";
        if (this.props.create !== 1) {
            my = "my-5";
            header = "Edit Company Profile";
        }
        return (
            <section className={my}>
                <div className="container p-5 bg-light rounded">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <div>
                                <h3 className="text-primary">
                                    <div>
                                        <b>{header}</b>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* <div id="profile-image" className="text-center">
                        <img
                            src="/storage/images/logo.png"
                            className="mx-auto rounded"
                            alt="avatar"
                            style={{ width: "25%" }}
                        ></img>
                        <label>Company Logo</label>
                        <label className="custom-file">
                            <input
                                type="file"
                                id="file"
                                className="custom-file-input"
                            ></input>
                            <span className="custom-file-control btn btn-danger">
                                <i className="far fa-caret-square-up"></i>{" "}
                                Choose file
                            </span>
                        </label>
                    </div> */}
                    <div className="container mt-5">
                        <form onSubmit={this.onSubmitSave}>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Name
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.onChangeName}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Indusrty
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={this.state.indusrty}
                                        onChange={this.onChangeIndusrty}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Headquarter
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={this.state.headquarter}
                                        onChange={this.onChangeHeadquarter}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Website
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="url"
                                        value={this.state.website}
                                        onChange={this.onChangeWebsite}
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Overview
                                </label>
                                <div className="col-lg-9">
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        value={this.state.overview}
                                        onChange={this.onChangeOverview}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label brand">
                                    Skills
                                </label>
                                <div className="col-lg-9">
                                    <Skills
                                        sys_skills={this.state.sys_skills}
                                        return_skills={this.return_skills.bind(
                                            this
                                        )}
                                    ></Skills>
                                </div>
                            </div>
                            <div className="text-right mt-5">
                                <input
                                    type="submit"
                                    value="Save"
                                    className="btn btn-success"
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyEditProfile;
