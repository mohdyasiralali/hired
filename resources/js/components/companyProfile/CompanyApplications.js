import React from "react";
import parse from "html-react-parser";
import Swal from "sweetalert2";

class CompanyApplications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: []
        };

        this.render_profiles = this.render_profiles.bind(this);
        this.onClickShowLetter = this.onClickShowLetter.bind(this);
        this.onClickDismiss = this.onClickDismiss.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        let url = "/applications/get/" + this.props.co_id;
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({ applications: response.data });
        });
    }

    onClickShowLetter(e) {
        let modal_id = "#letter_modal_" + e.target.value;
        // console.log(modal_id);
        $(modal_id).modal("show");
    }
    onClickDismiss(e) {
        // axios.delete('/application/delete/'+e.target.value)
        // .then(response => {
        //     console.log(response.data);
        // })
        let id = e.target.value;
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                axios
                    .delete("/application/delete/" + id)
                    .then(response => {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        console.log(response.data);
                        return response.data;
                    })
                    .then(json => {
                        this.axs();
                    });
            }
        });
    }

    render_profiles() {
        const parse = require("html-react-parser");
        return this.state.applications.map(application => {
            let modal_id = "letter_modal_" + application.application.id;
            return (
                <div
                    className="card border border-light p-2 mb-3 col-md-6"
                    style={{ backgroundColor: "#e6e9f0" }}
                    key={application.application.id}
                >
                    {/* <div className="top-right"> 
                    <span>X</span>
                </div> */}
                    <div className="row">
                        <div className="col-md-4 text-center my-auto">
                            <img
                                className="w-75 rounded-circle"
                                src="/storage/images/avatar.png"
                                alt=""
                            ></img>
                        </div>
                        <div className="col-md-8 p-2">
                            <div>
                                <h5>
                                    <b>
                                        <a
                                            href=""
                                            className="text-decoration-none"
                                        >
                                            {application.applicant.name}
                                        </a>
                                    </b>
                                </h5>
                                {/* <h6 className="text-muted">
                                Full Stack Web Developer
                            </h6> */}
                                <h6 className="text-muted">
                                    {application.applicant.email}
                                </h6>
                                <h6 className="text-muted">
                                    <b>Scored</b> X/Y 
                                </h6>{" "}
                                <h6 className="text-muted">
                                    Job Title: eg. Web Dev
                                </h6>
                                <h6 className="text-muted">
                                    Matching Skills: 4/7
                                </h6>
                                <hr></hr>
                            </div>
                            <div className="mb-2">
                                <button
                                    className="btn btn-danger btn-sm mr-2 btn-round"
                                    value={application.application.id}
                                    onClick={this.onClickShowLetter}
                                >
                                    Letter
                                </button>
                                <button
                                    className="btn btn-danger btn-sm mr-2 btn-round"
                                    value={application.application.id}
                                    onClick={this.onClickDismiss}
                                >
                                    Dismiss
                                </button>
                                <button className="btn btn-danger btn-sm mr-2 btn-round">
                                    Add to Archive
                                </button>
                                <button className="btn btn-danger btn-sm mr-2 btn-round">
                                    Message
                                </button>
                            </div>
                        </div>

                        {/* <!-- Modal --> */}
                        <div
                            className="modal fade"
                            id={modal_id}
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog modal-lg"
                                role="document"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                        >
                                            {application.application.subject}
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {parse(application.application.letter)}
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
                                    <b>Applications</b>
                                </h3>
                                <h6>
                                    <b>INCOMING REQUESTS</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">{this.render_profiles()}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyApplications;
