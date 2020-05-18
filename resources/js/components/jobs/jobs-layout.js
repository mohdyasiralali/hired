import React from "react";
// import JobCard from "./job-card";
import QuizCard from "./quiz_card";

class JobsLayout extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         quizzes: []
    //     };
    // }

    // componentDidMount() {
    //     this.axs();
    // }

    // axs() {
    //     axios.get("/quizzes/get").then(response => {
    //         // console.log(response.data);
    //         this.setState({ quizzes: response.data });
    //     });
    // }
    renderQuizzes() {
        if (this.props.quizzes.length === 0) {
            return (
                <div className="text-center">
                    <img
                    src="/storage/images/no-result.png"
                    alt="avatar"
                    className="w-75"
                    ></img>
                </div>
            );
        }

        return this.props.quizzes.map(quiz => {
            return (
                <div key={quiz.id} className="col-md-4 mb-3">
                    <QuizCard quiz_id={quiz.id}></QuizCard>
                </div>
            );
        });
    }

    render() {
        return (
            <section className="my-5">
                {/* <img
                    src="/storage/images/no-result.png"
                    alt="avatar"
                ></img> */}
                <div className="container rounded jobs-search">
                    <div className="row">{this.renderQuizzes()}</div>
                </div>
            </section>
        );
    }
}

export default JobsLayout;
