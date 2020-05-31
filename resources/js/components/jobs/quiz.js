import React from "react";
import Swal from "sweetalert2";
import ReactDOM from "react-dom";
import JobsHeader from "./header";
import Challenges from '../challenges/challenges';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        var dataSet = this.props.questions;

        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            incorrect: 0,
            submit: 0,
            timer: 15,
            // subject: "",
            // letter: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.startTimer = this.startTimer.bind(this);
    } // end constructor

    componentDidMount() {
        // console.log(this.props.questions);
        this.startTimer();
    }


    handleClick(choice) {
        if (choice == this.state.dataSet[this.state.current].correct) {
            this.setState({ correct: this.state.correct + 1 });
        } else {
            this.setState({ incorrect: this.state.incorrect + 1 });
        }

        if (this.state.current == this.state.dataSet.length - 1) {
            this.setState({ submit: 1 });
        } else {
            this.setState({ timer: 15 });
            this.setState({ current: this.state.current + 1 });
        }
    }

    onClickSubmit() {
        // console.log('COORECT',this.state.correct);
        // console.log('CEIL', Math.ceil((this.state.dataSet.length*70)/100));
        console.log('FLOOR', Math.floor((this.state.dataSet.length*70)/100));
        const body = document.getElementById("body");
        if (this.state.correct < Math.floor((this.state.dataSet.length*70)/100)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                    "Your profile will not be suggeted to the recruter! You scored " +
                    this.state.correct +
                    " out of "+this.state.dataSet.length+"! Try working on your skills "
            });
            body.style = "background-color: #e6e9f0";
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
        } else {
            Swal.fire({
                icon: "success",
                title: "Great Job",
                text:
                    "Your profile will be suggeted to the recruter! You scored " +
                    this.state.correct +
                    " out of "+this.state.dataSet.length+"! Keep it up"
            });
            // body.style = "background-color: #2F3133";
            ReactDOM.render(<Challenges 
                quiz_id = {this.props.quiz_id}
            />, document.getElementById("root"));
        }
    }

    startTimer() {
        let myInterval = setInterval(() => {
            let temp = this.state.timer;

            if (temp === 0) {
                if (this.state.current === this.state.dataSet.length - 1  ) {
                    clearInterval(myInterval);
                    this.setState({ submit: 1 });
                } else {
                    this.setState({ timer: this.state.timer + 15 });
                    this.setState({ current: this.state.current + 1 });
                }
            } else {
                this.setState({ timer: temp - 1 });
            }
            if (this.state.current === this.state.dataSet.length - 1 ) {
                clearInterval(myInterval);
            }
        }, 1000);
    }

    render() {
        let btn_disable = true;
        if (this.state.submit === 1) {
            btn_disable = false;
        }

        return (
            <section>
                <div className="container p-5 bg-light rounded" style={{marginTop:"80px"}}>
                    <div className="text-right">
                        <p className="text-muted">
                            {this.state.current + 1}/{this.state.dataSet.length}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-danger">{this.state.timer}</h2>
                    </div>
                    <QuizArea
                        handleClick={this.handleClick}
                        dataSet={this.state.dataSet[this.state.current]}
                    />
                    <div className="text-right mt-5">
                        <button
                            className="btn btn-danger"
                            disabled={btn_disable}
                            onClick={this.onClickSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

// ================================================================= END OF CLASS QUIZ

function Answer(props) {
    return (
        <div>
            <button
                // style={style}
                className="btn btn-primary w-75 btn-lg"
                onClick={() => props.handleClick(props.choice)}
            >
                {props.answer}
            </button>
        </div>
    );
}

function AnswerList(props) {
    var answers = [];
    for (let i = 0; i < props.dataSet.answers.length; i++) {
        answers.push(
            <div className="mb-3" key={i}>
                <Answer
                    choice={i}
                    handleClick={props.handleClick}
                    answer={props.dataSet.answers[i]}
                />
            </div>
        );
    }
    return <div>{answers}</div>;
}

function QuizArea(props) {
    return (
        <div className="align-items-center">
            <div className="text-center">
                {/* <Question dataSet={props.dataSet} /> */}
                <h1 className="mb-5">{props.dataSet.question}</h1>
            </div>
            <div className="text-center">
                <AnswerList
                    dataSet={props.dataSet}
                    handleClick={props.handleClick}
                />
            </div>
        </div>
    );
}
export default Quiz;
// ReactDOM.render(<Quiz />, document.getElementById("root"));
