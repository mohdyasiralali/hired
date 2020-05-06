import React from "react";
import JobEdit from "./job_edit";
import AddJobModal from "./add-job-modal";

class JobsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        };

        this.show = this.show.bind(this);
        this.render_edit = this.render_edit.bind(this);
    }

    show() {
        if (this.state.show === 0) {
            this.setState({ show: 1 });
        } else this.setState({ show: 0 });
    }

    redner_job() {
        return (
            <div className="col-md-6 p-3">
                <h3>
                    <b>Full Stack Web Developer</b>
                </h3>
                <h6 className="text-muted">FULL TIME</h6>
            </div>
        );
    }

    render_edit() {
        if (this.state.show === 1) {
            return (
                <div>
                    <JobEdit></JobEdit>
                </div>
            );
        }
    }

    render() {
        let btn = "";

        if (this.state.show === 1) {
            btn = "Hide";
        } else btn = "Edit";

        return (
            <section className="my-5">
                <div className="container p-5 bg-light rounded">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Jobs</b>
                                </h3>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-round"
                                data-toggle="modal"
                                data-target="#newJob"
                            >
                                <i className="fas fa-plus mr-2"></i>Add Job
                            </button>
                        </div>
                    </div>
                    <div className="container mt-5">
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
                                {this.redner_job()}
                                <div className="col-md-4 p-3 text-right">
                                    <button
                                        className="btn btn-primary btn-round mr-2"
                                        onClick={this.show}
                                    >
                                        {btn}
                                    </button>
                                    <button className="btn btn-danger btn-round mr-2">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div>{this.render_edit()}</div>
                        </div>{" "}
                    </div>
                </div>
                {/* // <!-- Modal --> */}
                <AddJobModal></AddJobModal>
            </section>
        );
    }
}

export default JobsPanel;
