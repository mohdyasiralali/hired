import React from "react";
import JobDescription from "./job_description";

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0
        };

        this.show = this.show.bind(this);
        this.render_description = this.render_description.bind(this);
    }

    show() {
        if (this.state.show === 0) {
            this.setState({ show: 1 });
        } else this.setState({ show: 0 });
    }

    render_description() {
        if (this.state.show === 1) {
            return (
                <div>
                    <JobDescription></JobDescription>
                </div>
            );
        }
    }

    render() {
        let btn = "";

        if (this.state.show === 1) {
            btn = <i className="fas fa-chevron-circle-up "></i>;
        } else btn = <i className="fas fa-chevron-circle-down "></i>;

        return (
            <div
                className="card border border-light p-1 mb-3"
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
                    <div className="col-md-9 p-3">
                        <h3>
                            <b>Full Stack Web Developer</b>
                        </h3>

                        <h6 className="text-muted">FULL TIME</h6>
                        <h6 className="text-muted">5 days ago</h6>
                    </div>
                    <div className="col-md-1 p-2 mt-auto">
                        <a className="text-primary" onClick={this.show}>
                            {btn}
                        </a>
                    </div>
                </div>
                <div>{this.render_description()}</div>
            </div>
        );
    }
}

export default Job;
