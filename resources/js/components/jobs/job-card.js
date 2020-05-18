import React from "react";
import ReactDOM from "react-dom";
import CompanyProfile from "../companyProfile/company_profile";
import Quiz from "./quiz";
import Swal from "sweetalert2";
import parse from "html-react-parser";

class JobCard extends React.Component {
    constructor(props) {
        super(props);

        this.renderProfile = this.renderProfile.bind(this);
        this.onClickQuiz = this.onClickQuiz.bind(this);
        this.desc = this.desc.bind(this);
    }
    renderProfile(e) {
        e.preventDefault();
        const body = document.getElementById("body");
        const root = document.getElementById("root");
        if (root) {
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <CompanyProfile
                    co_id={this.props.job.company.id}
                    name={this.props.job.company.name}
                    industry={this.props.job.company.industry}
                    headquarter={this.props.job.company.headquarter}
                    website={this.props.job.company.website}
                    overview={this.props.job.company.overview}
                    skills={this.props.job.skills}
                />,
                document.getElementById("root")
            );
        }
    }

    onClickQuiz() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to take this quiz again!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  continue!"
        }).then(result => {
            if (result.value) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )
                body.style =
                    "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
                ReactDOM.render(
                    <Quiz
                        job_id={this.props.job.job_id}
                        co_id={this.props.job.company.id}
                    />,
                    document.getElementById("root")
                );
            }
        });
    }

    desc() {
        let target_description_modal =
            "#modal-description-" + this.props.job.job_id;
        $(target_description_modal).modal("show");
    }

    render_description() {
        const parse = require("html-react-parser");

        // if (this.state.show === 1) {
        return (
            <div className="container p-5 bg-light">
                {parse(this.props.job.description)}
                {/* {this.render_btn()} */}
            </div>
        );
        // }
    }

    render() {
        let description_modal = "modal-description-" + this.props.job.job_id;

        return (
            // <div className="col-md-4 mb-3">
            <div className="card jobcard rounded">
                {/* <div className="text-right p-2">
                    <h6 className="bg-danger p-1 text-light rounded d-inline">
                        Hiring
                    </h6>
                </div>
                <div className="row justify-content-center mb-2 px-4 py-2">
                    <div className="col-md-6 text-center">
                        <img
                            src="/storage/images/co-logo.jpg"
                            alt="profile-image"
                            className="rounded-circle w-100 border p-2"
                        ></img>
                    </div>
                    <div className="col-md-6">
                        <div className="mt-4">
                            <h5 className="card-title font-weight-bold">
                                {this.props.job.company.name}
                            </h5>
                            <h6 className="text-muted">
                                {this.props.job.company.industry}
                            </h6>
                        </div>
                    </div>
                </div> */}
                {/* <div className="text-center">
                    <h4 className="card-title font-weight-bold">
                        {this.props.job.company.name}
                    </h4>
                    <h5 className="text-muted">
                        {this.props.job.company.industry}
                    </h5>
                </div> */}
                <div className="w-100 px-2 my-2 text-center job-card-footer">
                    {/* <hr className="w-75"></hr> */}
                    <a
                        href=""
                        onClick={this.renderProfile}
                        className="text-decoration-none"
                    >
                        <h5>
                            <strong>{this.props.job.title}</strong>
                        </h5>
                    </a>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="text-muted">
                                {this.props.job.type}
                            </h6>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-12">
                            {/* <h6 className="text-muted">5 days ago</h6> */}
                            <button
                                className="btn btn-primary btn-sm btn-round mr-2"
                                onClick={this.desc}
                                // value={this.props.job.id}
                            >
                                Job Description
                            </button>
                            <button
                                className="btn btn-primary btn-sm btn-round mr-2"
                                onClick={this.onClickQuiz}
                                value={this.props.job.id}
                            >
                                Take the Quiz
                            </button>
                        </div>
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
            </div>
            // </div>
        );
    }
}

export default JobCard;
