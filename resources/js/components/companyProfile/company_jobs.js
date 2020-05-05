import React from "react";
import Job from "./job";
class CompanyJobs extends React.Component {
    constructor(props) {
        super(props);

        this.render_jobs = this.render_jobs.bind(this);
    }

    render_jobs() {
        return (
            <div>
                <Job></Job>
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
                        <div className="row">{this.render_jobs()}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyJobs;
