// $ npm install html-react-parser --save
// HTML PARSER

import React from "react";
import TextArea from "./jobsPanel/TextArea";

class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            letter: ""
        };

        this.render_description = this.render_description.bind(this);
        this.render_btn = this.render_btn.bind(this);
        this.apply = this.apply.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.send = this.send.bind(this);
        this.desc = this.desc.bind(this);
    }

    onChangeSubject(e) {
        this.setState({ subject: e.target.value });
    }

    onChangeContent(content) {
        this.setState({ letter: content });
    }

    redner_job() {
        return (
            <div>
                <h3>
                    <b>{this.props.job.title}</b>
                </h3>
                <h6 className="text-muted">{this.props.job.type}</h6>
            </div>
        );
    }

    apply() {
        let target_apply_modal = "#modal-apply-" + this.props.job.id;
        $(target_apply_modal).modal("show");
    }
    desc() {
        let target_description_modal =
            "#modal-description-" + this.props.job.id;
        $(target_description_modal).modal("show");
    }

    send(e) {
        e.preventDefault();
        let request = {
            company_id: this.props.job.company_id,
            subject: this.state.subject,
            letter: this.state.letter
        };

        let target_apply_modal = "#modal-apply-" + this.props.job.id;
        $(target_apply_modal).modal("hide");

        let url = "/api/job/apply/" + this.props.job.id;
        axios.post(url, request).then(response => {});
    }

    render_btn() {
        let bool = false;
        if (this.props.auth === 1) {
            bool = true;
        }
        return (
            <button
                className="btn btn-danger btn-sm btn-round mr-2"
                onClick={this.apply}
                disabled={bool}
            >
                Apply
            </button>
        );
    }

    render_description() {
        const parse = require("html-react-parser");

        return (
            <div className="container p-5 bg-light">
                {parse(this.props.job.description)}
            </div>
        );
    }

    render() {
        let apply_modal = "modal-apply-" + this.props.job.id;
        let description_modal = "modal-description-" + this.props.job.id;

        return (
            <div>
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
                    </div>
                    <div className="text-right mb-2">
                        <button
                            className="btn btn-info mr-2 btn-sm btn-round"
                            onClick={this.desc}
                        >
                            Job Description
                        </button>

                        {this.render_btn()}
                    </div>
                </div>

                {/* Description Modal ====================================================== */}
                <div
                    className="modal fade"
                    id={description_modal}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    {this.props.job.title}
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.render_description()}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Apply Modal =============================================================== */}
                <div
                    className="modal fade"
                    id={apply_modal}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    {this.props.job.title}
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Letter Subject"
                                        className="form-control"
                                        value={this.state.subject}
                                        onChange={this.onChangeSubject}
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <TextArea
                                        description="<p>Write Something Intersting! Your Cover letter</p>"
                                        getContent={this.onChangeContent.bind(
                                            this
                                        )}
                                    ></TextArea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.send}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Job;
