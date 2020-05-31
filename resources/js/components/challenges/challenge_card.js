import React from "react";
import ReactDOM from "react-dom";
// import Quiz from "./quiz";
import Swal from "sweetalert2";
import TheChallenge from "./the_challenge";

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
            .get("/challenge/questions/" + this.props.challenge.id)
            .then(response => {
                console.log(response.data);
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
                // body.style =
                //     "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
                ReactDOM.render(
                    <TheChallenge questions={this.state.questions} />,
                    document.getElementById("root")
                );
            }
        });
    }

    render() {
        return (
            <div
                className="card jobcard rounded-challenges pb-2"
                style={{ minHeight: "300px" }}
            >
                <div className="px-2 my-2">
                    <div className="row p-2 text-center justify-content-center">
                        {/* <div className="col-md-4"> */}
                        <img
                            src="/storage/images/blind.gif"
                            alt="avatar"
                            className="w-50 rounded-circle mb-2"
                        ></img>
                        {/* </div> */}
                        {/* <div className="col-md-8 bg-"> */}
                        <div>
                            <h5>
                                <strong>{this.props.challenge.title}</strong>
                            </h5>
                            <h6 className="text-muted text-uppercase my-3">
                                <strong>Familiar with: </strong>
                                {this.props.challenge.techs}
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
                        // value={this.props.challenge.id}
                    >
                        Take the Challenge
                    </button>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;
