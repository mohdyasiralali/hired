import React from "react";
import ReactDOM from "react-dom";
// import Quiz from "./quiz";
import Swal from "sweetalert2";
import TheChallenge from "./the_challenge";

class ChallengeCard extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         quiz: [],
    //         questions: []
    //     };
    //     this.onClickQuiz = this.onClickQuiz.bind(this);
    // }

    // componentDidMount() {
    //     this.axs();
    // }

    // axs() {
    //     axios.get("/challenge/get/" + this.props.quiz_id).then(response => {
    //         this.setState({ quiz: response.data.quiz });
    //         this.setState({ questions: response.data.questions });
    //     });
    // }
    onClickChallenge() {
        Swal.fire({
            title: "Are you sure?",
            text:
                "The Challenge is set of coding questions, regarding the selected feild. The minimum required grade to pass the challenge is between 65-70%. Otherwise, you will be restricted for 15 dyas",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  continue!"
        }).then(result => {
            if (result.value) {
                body.style =
                    "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
                ReactDOM.render(
                    <TheChallenge />,
                    document.getElementById("root")
                );
            }
        });
    }

    render() {
        return (
            <div className="card jobcard rounded-challenges px-3 pb-2">
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
                            <button
                                className="btn btn-primary btn-sm btn-round mr-2"
                                onClick={this.onClickChallenge}
                                value={this.props.challenge.id}
                            >
                                Take the Challenge
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChallengeCard;