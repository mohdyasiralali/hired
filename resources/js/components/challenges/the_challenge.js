// npm install react-simple-code-editor
// https://www.npmjs.com/package/react-simple-code-editor

// npm install prismjs
// https://prismjs.com/

import React from "react";
import ChallengeDiv from "./challenge_div";
import Swal from "sweetalert2";

const code = `// write you code here 
// -Familiarize yourself with concepts of Clean Code & Clean Design
`;
class TheChallenge extends React.Component {
    constructor(props) {
        super(props);

        var question = this.props.questions[0];
        var length = this.props.questions.length;

        this.state = {
            question: question,
            length: length,
            current: 0,
            code
        };

        this.onClickChallenge = this.onClickChallenge.bind(this);
    }

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
                if (this.state.current === this.state.length - 1) {
                    alert("Todo something");
                } else {
                    this.setState({
                        question: this.props.questions[this.state.current + 1]
                    });
                    this.setState({ current: this.state.current + 1 });
                    this.setState({ code: code });
                }
            }
        });
    }

    renderRightDiv() {
        return this.props.questions.map(question => {
            let disable = false;
            let icon = <i className="far fa-check-circle mr-3"></i>;
            if (this.state.current !== parseInt(question.id) - 1) {
                disable = true;
                
            }
            if (this.state.current > parseInt(question.id) - 1) {
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
                            ></ChallengeDiv>
                            {/* <div className="text-right mt-5">
                                <button
                                    className="btn btn-danger btn-round"
                                    onClick={this.onClickSubmit}
                                >
                                    Submit
                                </button>
                            </div> */}
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
