import React from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import TheChallenge from "./TheChallenge";

class ChallengeCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        };
        this.onClickChallenge = this.onClickChallenge.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios
            .get("/api/challenge/questions/" + this.props.challenge.id)
            .then(response => {
                this.setState({ questions: response.data });
            });
    }
    onClickChallenge() {
        Swal.fire({
            title: "READ ME!",
            text:
                "The Challenge is set of coding questions. Whenever you finish a question and hit the Next button, you can't go back. Keep your code, intended and clean.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  continue!"
        }).then(result => {
            if (result.value) {
                ReactDOM.render(
                    <TheChallenge
                        questions={this.state.questions}
                        quiz_id={this.props.quiz_id}
                        user_id={this.props.user_id}
                    />,
                    document.getElementById("root")
                );
            }
        });
    }

    render() {
        let text = "Take the Challenge";
        let disable = false;
        if (this.props.bool_taken === 1) {
            disable = true;
            text = "Alrady Taken";
        }

        if (this.props.bool_property === 1) {
            disable = true;
            text = "Property";
        }

        return (
            <div
                className="card jobcard rounded-challenges pb-2"
                style={{ minHeight: "300px" }}
            >
                <div className="px-2 my-2">
                    <div className="row p-2 text-center justify-content-center">
                        <img
                            src="/storage/images/blind.gif"
                            alt="avatar"
                            className="w-50 rounded-circle mb-2"
                        ></img>
                        <div>
                            <h5>
                                <strong>{this.props.challenge.title}</strong>
                            </h5>
                            <h6 className="text-muted text-uppercase mt-3">
                                <strong>Familiar with: </strong>
                                {this.props.challenge.techs}
                            </h6>
                            <h6 className="text-muted text-uppercase mb-3">
                                <strong><i className="far fa-clock mr-2"></i>Published: </strong>
                                {this.props.date}
                            </h6>
                        </div>
                    </div>
                </div>
                <div
                    className="w-100 text-center"
                    style={{ position: "absolute", marginTop: "100%" }}
                >
                    <button
                        className="btn btn-primary btn-sm btn-round mr-2"
                        onClick={this.onClickChallenge}
                        disabled={disable}
                    >
                        {text}
                    </button>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
