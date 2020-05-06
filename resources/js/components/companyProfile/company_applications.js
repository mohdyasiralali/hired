import React from "react";

class CompanyApplications extends React.Component {
    constructor(props) {
        super(props);

        this.render_profiles = this.render_profiles.bind(this);
    }

    render_profiles() {
        return (
            <div
                className="card border border-light p-2 mb-3 col-md-12"
                style={{ backgroundColor: "#e6e9f0" }}
            >
                <div className="top-right"> 
                    <span>X</span>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center my-auto">
                        <img
                            className="w-75 rounded-circle"
                            src="/storage/images/avatar.png"
                            alt=""
                        ></img>
                    </div>
                    <div className="col-md-8 p-2">
                        <h5>
                            <b>
                                <a href="" className="text-decoration-none">
                                    Mohamad Al Ali
                                </a>
                            </b>
                        </h5>
                        <h6 className="text-muted">Full Stack Web Developer</h6>
                        <h6 className="text-muted">john.smoth@gmail.com</h6>
                        <hr></hr>
                        {/* Cover Letter */}
                        <h5>
                            Duis non volutpat arcu, eu mollis tellus. Sed
                            finibus aliquam neque sit amet sodales. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nulla
                            maximus pellentes que velit, quis consequat nulla
                            effi citur at.
                        </h5>
                    </div>
                </div>
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
                                    <b>Applications</b>
                                </h3>
                                <h6>
                                    <b>INCOMING REQUESTS</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">{this.render_profiles()}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyApplications;
