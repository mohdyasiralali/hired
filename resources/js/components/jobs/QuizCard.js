import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import Swal from "sweetalert2";

class QuizCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: [],
            questions: []
        };
        this.onClickQuiz = this.onClickQuiz.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/api/quiz/get/" + this.props.quiz_id).then(response => {
            this.setState({ quiz: response.data.quiz });
            this.setState({ questions: response.data.questions });
        });
    }
    onClickQuiz() {
        Swal.fire({
            title: "Are you sure?",
            text:
                "The Quiz is MCQ, with General Questions regarding the selected feild. The minimum required grade to pass the quiz is between 65-70%. Otherwise, you will be restricted for 15 dyas",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  continue!"
        }).then(result => {
            if (result.value) {
                ReactDOM.render(
                    <Quiz
                        quiz_id={this.state.quiz.id}
                        questions={this.state.questions}
                    />,
                    document.getElementById("root")
                );
            }
        });
    }

    render() {
        return (
            <div className="card jobcard rounded-circle p-3" style={{width:"200px", height:"200px"}}>
                <div className="w-100 text-center my-auto">
                    <h5>
                        <strong>{this.state.quiz.title}</strong>
                    </h5>
                    <div className="row p-2">
                        <div className="col-md-12">
                            <button
                                className="btn btn-dark btn-sm btn-round mr-2"
                                onClick={this.onClickQuiz}
                                value={this.state.quiz.id}
                            >
                                Take the Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizCard;
