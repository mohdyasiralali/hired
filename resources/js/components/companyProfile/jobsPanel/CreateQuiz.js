import React from "react";
import ReactDOM from "react-dom";
import AddQuestion from "./Question";

class CreateQuiz extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            questions: []
        }
        this.skip = this.skip.bind(this);
    }

    skip(){
        $('#newQuiz').modal('hide');
    }

    add(){
        let qs = this.state.questions;

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2>Create a MCQ Quiz</h2>
                        <AddQuestion></AddQuestion>
                        <hr></hr>
                        <div className="text-right my-2">
                            <button className="btn btn-primary btn-round mr-2"
                                onClick={this.skip}
                            >
                                Skip
                            </button>
                            <button className="btn btn-primary btn-round mr-2">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateQuiz;
