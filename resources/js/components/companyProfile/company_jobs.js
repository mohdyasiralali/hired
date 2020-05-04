import React from "react";

class CompanyJobs extends React.Component {
    constructor(props){
        super(props)

        this.render_jobs = this.render_jobs.bind(this);
    }

    render_jobs() {
        return (
            <div
                className="card border border-light p-1 mb-3"
                style={{backgroundColor: '#e6e9f0'}}
            >
                <div className="row">
                    <div className="col-md-2 text-center my-auto">
                        <img
                            className="w-75 rounded-circle"
                            src="/storage/images/co-logo.jpg"
                            alt=""
                        ></img>
                    </div>
                    <div className="col-md-9 p-3">
                        <h3>
                            <b>Full Stack Web Developer</b>
                        </h3>

                        <h6 className="text-muted">FULL TIME</h6>
                        <h6 className="text-muted">5 days ago</h6>
                    </div>
                    <div className="col-md-1 p-2 mt-auto">
                        <button className="btn btn-primary">More</button>
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
                                    <b>Jobs</b>
                                </h3>
                                <h6>
                                    <b>AVAILABLE JOB OFFERS</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            {this.render_jobs()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyJobs;
