import React from "react";
// import QuizCard from "./quiz_card";
import ChallengeCard from './challenge_card';

class ChallengesArea extends React.Component {
    renderChallenges() {
        if (this.props.challenges.length === 0) {
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

        return this.props.challenges.map(challenge => {
            return (
                <div key={challenge.id} className="col-md-3 mb-3">
                    <ChallengeCard challenge={challenge}></ChallengeCard>
                </div>
            );
        });
    }

    render() {
        return (
            <section className="my-5">
                <div className="container rounded jobs-search">
                    <div className="row">{this.renderChallenges()}</div>
                </div>
            </section>
        );
    }
}

export default ChallengesArea;
