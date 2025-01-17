import React from "react";
import Job from "./Job";
class CompanyJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        };

        this.render_jobs = this.render_jobs.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/api/jobs/get/" + this.props.co_id).then(response => {
            this.setState({ jobs: response.data });
        });
    }

    render_jobs() {
        return this.state.jobs.map(job => {
            return (
                <div key={job.id} className="w-100">
                    <Job job={job} auth={this.props.auth}></Job>
                </div>
            );
        });
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
