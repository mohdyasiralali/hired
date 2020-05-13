// $ npm install html-react-parser --save
// HTML PARSER

import React from "react";
import parse from "html-react-parser";

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

    redner_job() {
        return (
            <div>
                <h3>
                    <b>{this.props.title}</b>
                </h3>

                <h6 className="text-muted">{this.props.type}</h6>
                {/* <h6 className="text-muted">5 days ago</h6> */}
            </div>
        );
    }

    render_description() {
        const parse = require("html-react-parser");

        if (this.state.show === 1) {
            return (
                <div className="container p-5 bg-light">
                    {parse(this.props.description)}
                    <div className="text-right">
                        <button className="btn btn-danger btn-lg">Apply</button>
                    </div>
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
                <div className="row mb-3">
                    <div className="col-md-2 text-center my-auto">
                        <img
                            className="w-75 rounded-circle"
                            src="/storage/images/co-logo.jpg"
                            alt=""
                        ></img>
                    </div>
                    <div className="col-md-9 p-3">{this.redner_job()}</div>
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
