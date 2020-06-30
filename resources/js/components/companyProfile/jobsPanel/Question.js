import React from "react";

class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: ""
        };

        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onSubmitQuestion = this.onSubmitQuestion.bind(this);
        this.onChangeChoice1 = this.onChangeChoice1.bind(this);
        this.onChangeChoice2 = this.onChangeChoice2.bind(this);
        this.onChangeChoice3 = this.onChangeChoice3.bind(this);
        this.onChangeChoice4 = this.onChangeChoice4.bind(this);
    }

    onChangeQuestion(e) {
        this.setState({ question: e.target.value });
    }
    onChangeChoice1(e) {
        this.setState({ choice1: e.target.value });
    }
    onChangeChoice2(e) {
        this.setState({ choice2: e.target.value });
    }
    onChangeChoice3(e) {
        this.setState({ choice3: e.target.value });
    }
    onChangeChoice4(e) {
        this.setState({ choice4: e.target.value });
    }
    onSubmitQuestion(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitQuestion}>
                    <div className="form-group">
                        <label>Question?</label>
                        <input
                            className="form-control"
                            placeholder="What is the name of the first person who landed on the moon"
                            value={this.state.question}
                            onChange={this.onChangeQuestion}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>First Choice</label>
                        <input
                            className="form-control"
                            placeholder="Bill Gates"
                            value={this.state.choice1}
                            onChange={this.onChangeChoice1}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Second Choice</label>
                        <input
                            className="form-control"
                            placeholder="Steve Jobs"
                            value={this.state.choice2}
                            onChange={this.onChangeChoice2}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Third Choice</label>
                        <input
                            className="form-control"
                            placeholder="Mohamad Al Ali"
                            value={this.state.choice3}
                            onChange={this.onChangeChoice3}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Forth Choice</label>
                        <input
                            className="form-control"
                            placeholder="Neil Armstrong"
                            value={this.state.choice4}
                            onChange={this.onChangeChoice4}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Correct Choice</label>
                        <select className="form-control">
                            <option>First Choice</option>
                            <option>Second Choice</option>
                            <option>Third Choice</option>
                            <option>Forth Choice</option>
                        </select>
                    </div>
                    <div className="text-right my-2">
                        <button className="btn btn-primary btn-round btn-sm">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddQuestion;
