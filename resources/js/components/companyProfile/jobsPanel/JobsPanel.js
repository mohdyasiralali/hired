import React from "react";
import AddJobModal from "./AddJobModal";
import Swal from "sweetalert2";

class JobsPanel extends React.Component {
    constructor(props) {
        super(props);

        const co_id = this.props.co_id;

        this.state = {
            co_id: co_id,
            challenges: []
        };
        this.onClickDeleteChallenge = this.onClickDeleteChallenge.bind(this);
        this.render_modal_questions = this.render_modal_questions.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios
            .get("/api/challenges/company/get/" + this.state.co_id)
            .then(response => {
                this.setState({ challenges: response.data });
            });
    }

    onChallengeAdd(challenge) {
        let temp = this.state.challenges;
        temp.push(challenge);
        this.setState({ challenges: temp });
    }
    onClickDeleteChallenge(challenge) {
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
                    .delete("/api/challenge/delete/" + challenge.challenge_info.id)
                    .then(response => {
                        Swal.fire(
                            "Deleted!",
                            "The Challenge has been deleted.",
                            "success"
                        );
                        return response.data;
                    })
                    .then(json => {
                        let challenges = this.state.challenges;
                        const index = challenges.indexOf(challenge);
                        if (index > -1) {
                            challenges.splice(index, 1);
                        }
                        this.setState({ challenges: challenges });
                    });
            }
        });
    }

    render_modal_questions(questions) {
        return questions.map(question => {
            return (
                <div key={question.id} className="row">
                    <div className="col-md-8">
                        <p>
                            <b>{question.title}</b>
                        </p>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="fas fa-pencil-alt"></i>{" "}
                        </button>{" "}
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            );
        });
    }
    redner_company_challenges() {
        if (this.state.challenges.length === 0) {
            return (
                <div className="my-4">
                    <h5 className="text-muted">No Challenges Yet!</h5>
                </div>
            );
        }
        return this.state.challenges.map(challenge => {
            let modal_id = "modal-questions-" + challenge.challenge_info.id;
            let target_modal = "#" + modal_id;
            return (
                <div
                    key={challenge.challenge_info.id}
                    className="col-md-6 card border border-light p-3 mb-3"
                    style={{ backgroundColor: "#e6e9f0" }}
                >
                    <div>
                        <h3>
                            <b>{challenge.challenge_info.title}</b>
                        </h3>
                        <h6 className="text-muted">
                            {challenge.challenge_info.techs}
                        </h6>
                    </div>{" "}
                    <div className="mt-2 text-right">
                        <button
                            className="btn btn-primary btn-round mr-2"
                            data-toggle="modal"
                            data-target={target_modal}
                        >
                            Questions
                        </button>
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="fas fa-pencil-alt"></i>{" "}
                        </button>
                        <button
                            className="btn btn-danger btn-round mr-2"
                            onClick={() =>
                                this.onClickDeleteChallenge(challenge)
                            }
                        >
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                    {/* // =============================================Modal ChaLLENGE QUESTIONS */}
                    <div
                        className="modal fade"
                        id={modal_id}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="QuestionsModalLongTitle"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="QuestionsModalLongTitle"
                                    >
                                        <b>Questions</b>
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
                                    <button className="btn btn-danger btn-round mr-2">
                                        <i className="fas fa-plus mr-2"></i>Add
                                        Question{" "}
                                    </button>
                                    <div className="container p-5 mt-1">
                                        {this.render_modal_questions(
                                            challenge.questions
                                        )}
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
            <section>
                <div className="p-5 bg-light rounded-bottom">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Challenges</b>
                                </h3>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-round"
                                data-toggle="modal"
                                data-target="#newChallenge"
                            >
                                <i className="fas fa-plus mr-2"></i>Add
                                Challenge
                            </button>
                        </div>
                    </div>
                    <div className="container row mt-5">
                        {this.redner_company_challenges()}
                    </div>
                </div>
                {/* // <!-- Modal --> */}
                <AddJobModal
                    co_id={this.props.co_id}
                    onChallengeAdd={this.onChallengeAdd.bind(this)}
                ></AddJobModal>
            </section>
        );
    }
}

export default JobsPanel;
