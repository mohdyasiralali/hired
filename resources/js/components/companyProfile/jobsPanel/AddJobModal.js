import React from "react";
import TextArea from "./TextArea";
import Swal from "sweetalert2";
import Skills from "../Skills";
// import CreateQuiz from "./create_quiz";
// import Quiz from "../../jobs/quiz";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faBurn } from "@fortawesome/free-solid-svg-icons";

class AddJobModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // title: "",
            // type: "",
            // description: "",
            position: "",
            skills: [],
            quiz_id: 1,
            sys_skills: [],
            quizzes: [],
            temp_question: "<p>Write your Challenge</p>",
            temp_question_title: "",
            questions: []
        };

        this.onChangePosition = this.onChangePosition.bind(this);
        this.onSubmitAddJob = this.onSubmitAddJob.bind(this);
        this.renderQuizzes = this.renderQuizzes.bind(this);
        this.onChangeQuiz = this.onChangeQuiz.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
        this.onChangeQuestionTitle = this.onChangeQuestionTitle.bind(this);
        this.renderQuestions = this.renderQuestions.bind(this);
        this.onClickShowQuestion = this.onClickShowQuestion.bind(this);
        this.onClickDltQuestion = this.onClickDltQuestion.bind(this);
        // this.mouseLeave = this.mouseLeave.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
    }

    // ================================================== DB GET SKILLS AND QUIZZES
    axs() {
        axios
            .get("/skills")
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({ sys_skills: json });
            });

        axios
            .get("/quizzes/get")
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({ quizzes: json });
            });
    }

    componentDidMount() {
        this.axs();
    }

    // ============================================= ON CHANGE
    onChangePosition(e) {
        this.setState({ position: e.target.value });
    }
    onChangeQuiz(e) {
        this.setState({ quiz_id: e.target.value });
    }
    onChangeQuestionTitle(e) {
        this.setState({ temp_question_title: e.target.value });
    }
    getQuestion(q) {
        this.setState({ temp_question: q });
    }
    return_skills(skills) {
        this.setState({ skills: skills });
    }

    // onChangeType(e) {
    //     this.setState({ type: e.target.value });
    // }
    // onChangeDescription(jd) {
    //     this.setState({ description: jd });
    // }

    // =========================================== ON SUBMIT ADD
    onSubmitAddJob(e) {
        e.preventDefault();

        if (this.state.questions.length === 0) {
            Swal.fire({
                icon: "error",
                title: "Questions?",
                text: "At least add one question to the challenge"
            });
        } else if (this.state.techs === "") {
            Swal.fire({
                icon: "error",
                title: "Techs?",
                text: "At least add one technology/skill to the challenge"
            });
        } else {
            let techs = "";
            let length = this.state.skills.length;
            this.state.sys_skills.map(skill => {
                if (this.state.skills.includes(skill.id)) {
                    console.log("LebgtH", length);

                    if (length === 1) {
                        techs = techs.concat(skill.title);
                    } else {
                        techs = techs.concat(skill.title + ", ");
                    }
                    length = length - 1;
                }
            });

            let return_array = {
                co_id: this.props.co_id,
                position: this.state.position,
                quiz_id: this.state.quiz_id,
                techs: techs,
                questions: this.state.questions
            };
            this.setState({ questions: [] });
            // console.log(return_array);

            axios.post("/challenge/create", return_array).then(response => {
                // console.log(response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Chaallenge Successfully added",
                    showConfirmButton: false,
                    timer: 1000
                });
                this.props.onChallengeAdd(response.data);
            });
            $("#newChallenge").modal("hide");
        }
    }

    // ============================================================ RENDER AVAILABLE QUIZEZ
    renderQuizzes() {
        return this.state.quizzes.map(quiz => {
            return (
                <option key={quiz.id} value={quiz.id}>
                    {quiz.title}
                </option>
            );
        });
    }

    // ====================================================== QUESTION: ADD, DELETE, SHOW

    addQuestion() {
        let newQuestion = {
            title: this.state.temp_question_title,
            question: this.state.temp_question
        };
        let questions = this.state.questions;
        questions.push(newQuestion);
        this.setState({ questions: questions });
        this.setState({ temp_question: "<p>Write your Challenge</p>" });
        this.setState({ temp_question_title: "" });
        $("#newQuestion").modal("hide");
    }

    onClickShowQuestion(e) {
        e.preventDefault();

        if (e.target.textContent === "Show") {
            e.target.textContent = "Hide";
        } else {
            e.target.textContent = "Show";
        }

        let div = document.getElementById(e.target.value);
        if (div.style.display === "block") {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
    }
    onClickDltQuestion(e) {
        e.preventDefault();
        let key = e.target.value;
        console.log("DElte", key);
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                let temp = this.state.questions;
                const index = key;
                if (index > -1) {
                    temp.splice(index, 1);
                }
                this.setState({ questions: temp });
            }
        });
    }
    renderQuestions() {
        if (this.state.questions.length === 0) {
            return (
                <div className="my-4">
                    <h5 className="text-muted">No Questions Yet!</h5>
                </div>
            );
        }
        let key = -1;
        const parse = require("html-react-parser");
        return this.state.questions.map(question => {
            key = key + 1;
            let id = "pop-up-" + key;
            // console.log("key", key);s
            return (
                <div key={key} className="row mb-2">
                    <div className="col-md-6">
                        <h5 className="d-inline">{question.title}</h5>
                    </div>
                    <div className="col-md-6">
                        <button
                            className="mx-2 btn btn-primary"
                            value={id}
                            onClick={this.onClickShowQuestion}
                        >
                            Show
                        </button>
                        <button
                            className="mx-2 btn btn-danger"
                            value={key}
                            onClick={this.onClickDltQuestion}
                        >
                            Delete
                        </button>
                    </div>
                    <div
                        id={id}
                        className="w-100 p-5 rounded border border-primary bg-primary mt-2 mb-4 "
                        style={{ display: "none" }}
                    >
                        <p>{parse(question.question)}</p>
                    </div>
                </div>
            );
        });
    }
    // ================================================ MAIN RENDER
    render() {
        return (
            <div>
                {/* // <!-- Modal --> */}
                <div
                    className="modal fade"
                    id="newChallenge"
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
                                    <b>Add Challenge</b>
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
                                        <label>Position</label>
                                        <input
                                            type="text"
                                            placeholder="eg. Senior UI/UX Designer"
                                            className="form-control"
                                            value={this.state.title}
                                            onChange={this.onChangePosition}
                                            required
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            value={this.state.type}
                                            onChange={this.onChangeQuiz}
                                        >
                                            {this.renderQuizzes()}
                                        </select>
                                    </div>
                                    <Skills
                                        sys_skills={this.state.sys_skills}
                                        return_skills={this.return_skills.bind(
                                            this
                                        )}
                                    ></Skills>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-round mt-3"
                                        data-toggle="modal"
                                        data-target="#newQuestion"
                                    >
                                        <i className="fas fa-plus mr-2"></i>Add
                                        Question
                                    </button>
                                    <div className="container p-5">
                                        {this.renderQuestions()}
                                    </div>
                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-round mt-3"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // =============================================Modal Challenge */}
                <div
                    className="modal fade"
                    id="newQuestion"
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
                                    <b>Add Question</b>
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
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            placeholder="eg. Find Football Points"
                                            className="form-control"
                                            value={
                                                this.state.temp_question_title
                                            }
                                            onChange={
                                                this.onChangeQuestionTitle
                                            }
                                        ></input>
                                    </div>
                                    <TextArea
                                        description={this.state.temp_question}
                                        getContent={this.getQuestion.bind(this)}
                                    ></TextArea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-round mt-3"
                                    onClick={this.addQuestion}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddJobModal;
