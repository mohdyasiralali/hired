import React from "react";
import TextArea from "./text-area";
import Swal from "sweetalert2";
import CreateQuiz from "./create_quiz";

class AddJobModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            type: "",
            description: ""
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmitAddJob = this.onSubmitAddJob.bind(this);
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }
    onChangeType(e) {
        this.setState({ type: e.target.value });
    }
    onChangeDescription(jd) {
        this.setState({ description: jd });
    }

    onSubmitAddJob(e) {
        e.preventDefault();
        let job = {
            co_id: this.props.co_id,
            title: this.state.title,
            type: this.state.type === "" ? "Full Time" : this.state.type,
            description:
                this.state.description === ""
                    ? "<p>Write you Job Description</p>"
                    : this.state.description
        };
        console.log("JOB ============>", job);
        axios.post("/job/create", job).then(response => {
            this.props.onJobAdd(response.data);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Successfully Created",
                showConfirmButton: false,
                timer: 2000
            });
            // console.log(response.data);
        });
        $("#newJob").modal("hide");
        $("#newQuiz").modal("show");
    }

    render() {
        return (
            <div>
                {/* // <!-- Modal --> */}
                <div
                    className="modal fade"
                    id="newJob"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="newJobModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="newJobModalLabel"
                                >
                                    <b>Add New Job</b>
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
                                <form onSubmit={this.onSubmitAddJob}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                            className="form-control"
                                            value={this.state.title}
                                            onChange={this.onChangeTitle}
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            value={this.state.type}
                                            onChange={this.onChangeType}
                                        >
                                            <option>Full Time</option>
                                            <option>Part Time</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <TextArea
                                            description="<p>Write you Job Description</p>"
                                            getContent={this.onChangeDescription.bind(
                                                this
                                            )}
                                        ></TextArea>
                                    </div>
                                    {/* <div className="my-3">
                                        <button className="btn btn-primary btn-sm btn-round"
                                        >
                                            Add Quiz
                                        </button>
                                    </div> */}
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-round"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // =============================================Modal Quiz */}
                <div
                    className="modal fade"
                    id="newQuiz"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="newQuizModalLongTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="newQuizModalLongTitle"
                                >
                                    <b>Add New Quiz</b>
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
                                <div>
                                    <CreateQuiz></CreateQuiz>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddJobModal;
