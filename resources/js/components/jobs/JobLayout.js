import React from "react";
import QuizCard from "./QuizCard";
class JobsLayout extends React.Component {
    constructor(props) {
        super(props);

        this.onClickSlide = this.onClickSlide.bind(this);
        this.onClickSlideBack = this.onClickSlideBack.bind(this);
    }

    // ===================================================================== SLIDER
    sideScroll(element, direction, speed, distance, step) {
        var scrollAmount = 0;
        var slideTimer = setInterval(function() {
            if (direction == "left") {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    onClickSlide(e) {
        var container = document.getElementById("slide-scroll");
        this.sideScroll(container, "right", 15, 250, 10);
    }

    onClickSlideBack(e) {
        var container = document.getElementById("slide-scroll");
        this.sideScroll(container, "left", 15, 250, 10);
    }
    // ===================================================================== RENDER QUIZZES
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
                <div key={quiz.id} className="col-md-3 mb-3 mx-auto">
                    <QuizCard quiz_id={quiz.id}></QuizCard>
                </div>
            );
        });
    }
    // ===================================================================== MAIN RENDER
    render() {
        return (
            <section style={{ marginTop: "80px" }} className="d-flex">
                <div className="my-auto">
                    <button
                        id="slideBack"
                        className="text-light btn"
                        style={{ backgroundColor: "none" }}
                        onClick={this.onClickSlideBack}
                    >
                        <i className="fas fa-chevron-left fa-3x"></i>
                    </button>
                </div>
                <div className="container" style={{ width: "88%" }}>
                    <div className="row-fluid d-flex" id="slide-scroll">
                        {this.renderQuizzes()}
                    </div>
                </div>
                <div className="my-auto">
                    <button
                        id="slide"
                        className="text-light btn"
                        style={{ backgroundColor: "none" }}
                        onClick={this.onClickSlide}
                    >
                        <i className="fas fa-chevron-right fa-3x"></i>
                    </button>
                </div>
            </section>
        );
    }
}

export default JobsLayout;
