import React from "react";

class JobDescription extends React.Component {
    render() {
        return (
            <div className="container p-5 mb-5">
                <div className="row mb-3">
                    <div className="col-sm-4 mx-auto">
                        <div>
                            <h4>
                                <b>Job Overview</b>
                            </h4>
                        </div>
                    </div>
                    <div className="col-sm-8 mx-auto">
                        <p>
                            Duis non volutpat arcu, eu mollis tellus. Sed
                            finibus aliquam neque sit amet sodales. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nulla
                            maximus pellentes que velit, quis consequat nulla
                            effi citur at.
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-4 mx-auto">
                        <div>
                            <h4>
                                <b>Responsibilities and Duties</b>
                            </h4>
                        </div>
                    </div>
                    <div className="col-sm-8 mx-auto">
                        <ul>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                        </ul>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-4 mx-auto">
                        <div>
                            <h4>
                                <b>Desired Skills And Experience</b>
                            </h4>
                        </div>
                    </div>
                    <div className="col-sm-8 mx-auto">
                        <ul>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                            <li>Duis non volutpat arcu, eu mollis tellus</li>
                        </ul>
                    </div>
                </div>
                <div className='text-right'>
                    <button className="btn btn-danger btn-lg">
                        Apply
                    </button>
                </div>
            </div>
        );
    }
}

export default JobDescription;
