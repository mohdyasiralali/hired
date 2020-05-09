import React from "react";
import JobsLayout from "./jobs-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class JobsHeader extends React.Component {
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
                                        <input
                                            type="text"
                                            className="p-3 w-25 field-icon search-field mb-2"
                                            // placeholder={<FontAwesomeIcon icon={faCoffee}/>}
                                        >
                                            </input>
                                        <h4 className="text-light">
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
                <JobsLayout></JobsLayout>
            </div>
        );
    }
}

export default JobsHeader;

