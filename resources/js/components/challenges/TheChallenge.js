// npm install react-simple-code-editor
// https://www.npmjs.com/package/react-simple-code-editor

// npm install prismjs
// https://prismjs.com/

import React from "react";
import ReactDOM from "react-dom";
import ChallengeDiv from "./ChallengeDiv";
import challenges from "./Challenges";
import Swal from "sweetalert2";
import Challenges from "./Challenges";

const code = `// write you code here 
// -Familiarize yourself with concepts of Clean Code & Clean Design
`;
class TheChallenge extends React.Component {
    constructor(props) {
        super(props);

        var question = this.props.questions[0];
        var length = this.props.questions.length;

        this.state = {
            // auth_user_id: null,
            question: question,
            length: length,
            current: 0,
            code,
            answers: []
        };

        this.onClickChallenge = this.onClickChallenge.bind(this);
    }

    // componentDidMount() {
    //     this.axs();
    // }

    // axs() {
    //     axios.get("/authenticated_user").then(response => {
    //         this.setState({ auth_user_id: response.data.user_id });
    //     });
    // }

    onClickChallenge(id) {
        let index = parseInt(id) - 1;
        this.setState({ question: this.props.questions[index] });
    }

    onClickSubmit() {
        Swal.fire({
            title: "Are you sure?",
            text:
                "Are you sure you want to continue? You can't go back to this question again",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  continue!"
        }).then(result => {
            if (result.value) {
                let answer = {
                    challenge_id: this.state.question.challenge_id,
                    question_id: this.state.question.id,
                    user_id: this.props.user_id,
                    code: this.state.code
                };

                let answers = this.state.answers;
                answers.push(answer);

                if (this.state.current === this.state.length - 1) {
                    console.log("SUBMITTED ANSWERS", this.state.answers);
                    axios
                        .post("/challenge/submit", {
                            answers: this.state.answers
                        })
                        .then(response => {
                            console.log(response.data);
                            if (
                                response.data.message === "Successfully added"
                            ) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Successfully Submited",
                                    showConfirmButton: false,
                                    timer: 1000
                                });
                                if (document.getElementById("root")) {
                                    ReactDOM.render(
                                        <Challenges
                                            quiz_id={this.props.quiz_id}
                                        />,
                                        document.getElementById("root")
                                    );
                                }
                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!"
                                });
                            }
                        });
                } else {
                    this.setState({
                        question: this.props.questions[this.state.current + 1],
                        current: this.state.current + 1,
                        code: code,
                        answers: answers
                    });
                }
            }
        });
    }

    renderRightDiv() {
        let index = -1;
        return this.props.questions.map(question => {
            index = index + 1;
            let disable = false;
            let icon = <i className="far fa-check-circle mr-3"></i>;

            if (this.state.current !== index) {
                disable = true;
            }
            if (this.state.current > index) {
                icon = <i className="fas fa-check-circle mr-3"></i>;
            }
            return (
                <div key={question.id} className="d-block">
                    <button
                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                        style={{ height: "70px" }}
                        onClick={() => this.onClickChallenge(question.id)}
                        disabled={disable}
                    >
                        {/* <i className="fas fa-check-circle mr-3"></i> */}
                        {icon}
                        <strong>{question.title}</strong>
                    </button>
                </div>
            );
        });
    }

    onCodeChange(code) {
        this.setState({ code: code });
    }

    render() {
        let final_submit = 0;
        if (this.state.current === this.state.length - 1) {
            final_submit = 1;
        }
        return (
            <section>
                <div className="container-fluid">
                    <div className="row p-5 justify-content-center">
                        <div className="col-md-8 bg-white p-5 mx-auto rounded">
                            <ChallengeDiv
                                question={this.state.question}
                                code={this.state.code}
                                onClickSubmit={this.onClickSubmit.bind(this)}
                                onCodeChange={this.onCodeChange.bind(this)}
                                final_submit={final_submit}
                            ></ChallengeDiv>
                        </div>
                        <div className="col-md-3 py-5 text-center bg-white mx-auto rounded">
                            {this.renderRightDiv()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TheChallenge;
