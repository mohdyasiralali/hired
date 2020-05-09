import React from "react";
import JobEdit from "./job_edit";

class JobRecruiter extends React.Component {
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
                                <b>Full Stack Web Developer</b>
                            </h3>
                            <h6 className="text-muted">FULL TIME</h6>
                        </div>{" "}
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
                </div>
            </div>
        );
    }
}

export default JobRecruiter;
