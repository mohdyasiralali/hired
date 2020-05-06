import React from "react";
class CompanyEditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSelectedSkills() {
        return (
            <div>
                <button className="btn btn-sm btn-info btn-round mr-1">
                    React
                </button>
            </div>
        );
    }

    renderSkills() {
        return (
            <div>
                <button className="btn btn-sm btn-info btn-round mr-1">
                    React
                </button>
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
                                    <b>Edit Company Profile</b>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="profile-image" className="text-center">
                        <img
                            src="/storage/images/co-logo.jpg"
                            className="mx-auto rounded"
                            alt="avatar"
                            style={{ width: "25%" }}
                        ></img>
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
                    </div>
                    <div className="container mt-5">
                        <form>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Name
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="text"
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
                                    ></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label form-control-label">
                                    Founded
                                </label>
                                <div className="col-lg-9">
                                    <input
                                        className="form-control"
                                        type="date"
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
                                    ></textarea>
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
                        <hr></hr>
                        <h2>Skills</h2>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Available Skills</h5>
                                            {this.renderSkills()}
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Selected Skills</h5>
                                            {this.renderSkills()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyEditProfile;
