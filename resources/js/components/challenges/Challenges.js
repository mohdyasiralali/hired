import React from "react";
// import JobsLayout from "../jobs/jobs-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ChallengesArea from "./ChallengeArea";

class Challenges extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            challenges: [],
            auth_user: []
        };
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/authenticated_user").then(response => {
            this.setState({ auth_user: response.data });
            // console.log('aith state user',this.state.auth_user);
        });
        axios.get("/challenges/get/" + this.props.quiz_id).then(response => {
            console.log(response.data);
            this.setState({ challenges: response.data });
        });
    }
    onChangeSearch(e) {
        axios
            .get("/challenges/get/" + this.props.quiz_id + "/" + e.target.value)
            .then(response => {
                this.setState({ challenges: response.data });
            });
    }

    render_area() {
        if (this.state.auth_user.length !== 0) {
            return (
                <ChallengesArea
                    challenges={this.state.challenges}
                    quiz_id={this.props.quiz_id}
                    auth_user={this.state.auth_user}
                ></ChallengesArea>
            );
        }
    }
    render() {
        return (
            <div>
                <section>
                    <div className="container p-3 h-100">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="w-100 text-center">
                                <h1 className="text-light mb-4"></h1>
                                <div className="bg-light d-inline search-field py-2 px-3">
                                    <FontAwesomeIcon icon={faSearch} />
                                    <input
                                        type="text"
                                        className="py-1 px-3 w-25 field-icon search-field mx-2"
                                        onChange={this.onChangeSearch}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.render_area()}
                {/* <ChallengesArea
                    challenges={this.state.challenges}
                    quiz_id={this.props.quiz_id}
                    auth_user={this.state.auth_user}
                ></ChallengesArea> */}
            </div>
        );
    }
}

export default Challenges;
