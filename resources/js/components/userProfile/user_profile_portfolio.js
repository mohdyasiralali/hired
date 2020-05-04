import React from "react";

class UserProfilePortfolio extends React.Component {
    constructor(props) {
        super(props);

        this.renderImages = this.renderImages.bind(this);
        this.renderProjects = this.renderProjects.bind(this);
    }

    renderProjects() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-8 mb-2">
                <div className="bg-primary text-light rounded p-4 overflow-auto">
                    <div className="text-center top-right">
                        <h5>
                            <a
                                href="/storage/images/change.jpg"
                                className="text-light"
                                download
                            >
                                <i className="fas fa-download"></i>{" "}
                            </a>
                        </h5>
                    </div>
                    <h2>
                        <b>Project Title:</b> Hired
                    </h2>
                    <hr className="border border-light"></hr>
                    <p>
                        <b>Description:</b> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Excepturi ex corrupti
                        tempore animi quo at tempora exercitationem unde culpa,
                        vitae neque laboriosam eius doloribus? Repellat placeat
                        vero eligendi consectetur quaerat.
                    </p>
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
                            <h4 className="text-primary mb-3">
                                <b>Gallery</b>
                            </h4>
                            <div className="row">
                                {this.renderImages()}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-primary mb-3">
                                <b>Projects</b>
                            </h4>
                            <div className="row">
                                {this.renderProjects()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfilePortfolio;
