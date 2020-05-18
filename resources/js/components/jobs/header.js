import React from "react";
import JobsLayout from "./jobs-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSearch } from "@fortawesome/free-solid-svg-icons";

class JobsHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quizzes: [],
        };
        this.onChangeSearch = this.onChangeSearch.bind(this);

    }
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/quizzes/get").then(response => {
            this.setState({ quizzes: response.data });
        });
    }
    onChangeSearch(e){
        axios.get("/quizzes/get/"+e.target.value).then(response => {
            this.setState({ quizzes: response.data });
        });
    }

    render() {
        return (
            <div>
                <section>
                    <div className="hero-image">
                        <div className="overlay h-100">
                            <div className="container p-3 h-100">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="w-100 text-center">
                                        <h1 className="text-light mb-4">
                                            <b>
                                                Get matched with a job you love{" "}
                                                <i className="fas fa-heart"></i>
                                            </b>
                                        </h1>
                                        <div className="bg-light d-inline search-field py-2 px-3">
                                            <FontAwesomeIcon icon={faSearch} />
                                            <input
                                                type="text"
                                                className="py-1 px-3 w-25 field-icon search-field mx-2"
                                                onChange = {this.onChangeSearch}
                                            ></input>
                                        </div>

                                        <h4 className="text-light mt-2">
                                            <b>
                                                Search skills, professions &
                                                companies
                                            </b>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <JobsLayout quizzes={this.state.quizzes}></JobsLayout>
            </div>
        );
    }
}

export default JobsHeader;
