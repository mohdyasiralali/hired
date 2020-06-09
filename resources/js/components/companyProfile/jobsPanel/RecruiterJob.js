import React from "react";
import JobEdit from "./JobEdit";

class JobRecruiter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 0
        };
        this.show = this.show.bind(this);
        this.render_edit = this.render_edit.bind(this);
        this.onDeleteJob = this.onDeleteJob.bind(this);
    }
    show() {
        if (this.state.show === 0) {
            this.setState({ show: 1 });
        } else this.setState({ show: 0 });
    }
    render_edit() {
        if (this.state.show === 1) {
            return (
                <div>
                    <JobEdit
                        job={this.props.job}
                        updateJob={this.updateJob.bind(this)}
                    ></JobEdit>
                </div>
            );
        }
    }

    onDeleteJob() {
        this.props.deleteJob(this.props.job);
    }

    updateJob(newjob, job) {
        this.props.updateJob(newjob,job);
        this.setState({ show:0 })
    }

    render() {
        let btn = "";

        if (this.state.show === 1) {
            btn = "Hide";
        } else btn = "Edit";

        // console.log('JOBB======',this.props.job)
        return (
            <div>
                <div
                    className="card border border-light p-2 mb-3"
                    style={{ backgroundColor: "#e6e9f0" }}
                >
                    <div className="row">
                        <div className="col-md-2 text-center my-auto">
                            <img
                                className="w-75 rounded-circle"
                                src="/storage/images/co-logo.jpg"
                                alt=""
                            ></img>
                        </div>
                        <div className="col-md-6 p-3">
                            <h3>
                                <b>{this.props.job.title}</b>
                            </h3>
                            <h6 className="text-muted">
                                {this.props.job.type}
                            </h6>
                        </div>{" "}
                        <div className="col-md-4 p-3 text-right">
                            <button
                                className="btn btn-primary btn-round mr-2"
                                onClick={this.show}
                            >
                                {btn}
                            </button>
                            <button
                                className="btn btn-danger btn-round mr-2"
                                onClick={this.onDeleteJob}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div>{this.render_edit()}</div>
                </div>
            </div>
        );
    }
}

export default JobRecruiter;
