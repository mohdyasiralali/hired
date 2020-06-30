import React from "react";
import Skills from "./Skills";
import Swal from "sweetalert2";
class CompanyEditProfile extends React.Component {
    constructor(props) {
        super(props);

        let name = this.props.name;

        this.state = {
            name: name,
            industry: "",
            headquarter: "",
            website: "",
            overview: "",
            sys_skills: [],
            skills: []
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIndustry = this.onChangeIndustry.bind(this);
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
            .get("/api/skills")
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({ sys_skills: json });
            });
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeIndustry(e) {
        this.setState({ industry: e.target.value });
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

        let post = {
            name: this.state.name === "" ? this.props.name : this.state.name,
            industry:
                this.state.industry === ""
                    ? this.props.industry
                    : this.state.industry,
            headquarter:
                this.state.headquarter === ""
                    ? this.props.headquarter
                    : this.state.headquarter,
            website:
                this.state.website === ""
                    ? this.props.website
                    : this.state.website,
            overview:
                this.state.overview === ""
                    ? this.props.overview
                    : this.state.overview,
            skills: this.state.skills
        };

        if (this.props.create === 1) {
            axios.post("/api/company/create", post).then(response => {
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
        } else {
            let url = "/api/company/update/" + this.props.co_id;
            axios.put(url, post).then(response => {
                if (response.data.message === "updated") {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Successfully Updated",
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
        }
        $("#createPage").modal("hide");
    }

    render() {
        let my = "";
        let header = "Create Company Profile";
        if (this.props.create !== 1) {
            header = "Edit Company Profile";
        }
        return (
            <section className={my}>
                <div className="p-5 bg-light rounded-bottom">
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
                                        defaultValue={this.state.name}
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
                                        defaultValue={this.props.industry}
                                        onChange={this.onChangeIndustry}
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
                                        defaultValue={this.props.headquarter}
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
                                        defaultValue={this.props.website}
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
                                        defaultValue={this.props.overview}
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
