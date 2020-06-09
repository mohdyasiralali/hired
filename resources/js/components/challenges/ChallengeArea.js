import React from "react";
// import QuizCard from "./quiz_card";
import ChallengeCard from "./ChallengeCard";

class ChallengesArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taken: [],
            companies_array: []
        };
    }

    componentDidMount() {
        this.get_user_taken();
    }
    get_user_taken() {
        axios
            .get("/challenges/user/" + this.props.auth_user.user_id)
            .then(response => {
                this.setState({ taken: response.data });
            });

        let temp = this.state.companies_array;
        this.props.auth_user.companies.map(company => {
            temp.push(company.company.id)
        });
        this.setState({ companies_array:temp });
        console.log(this.state.companies_array)
    }

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
            let bool_taken = 0;
            if (this.state.taken.includes(challenge.id)) {
                bool_taken = 1;
            }

            let bool_property = 0;
            if (this.state.companies_array.includes(challenge.company_id)) {
                bool_property = 1;
            }
            return (
                <div key={challenge.id} className="col-md-3 mb-3">
                    <ChallengeCard
                        challenge={challenge}
                        quiz_id={this.props.quiz_id}
                        user_id={this.props.auth_user.user_id}
                        bool_taken={bool_taken}
                        bool_property={bool_property}
                    ></ChallengeCard>
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
