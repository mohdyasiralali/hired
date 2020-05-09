import React from "react";

class JobCard extends React.Component {
    render() {
        return (
            <div className="col-md-4 mb-3">
                <div className="card jobcard rounded">
                    <div className="text-right p-2">
                        <h6 className="bg-danger p-1 text-light rounded d-inline">
                            Hiring
                        </h6>
                    </div>
                    <div className="row justify-content-center mb-2 px-4 py-2">
                        <div className="col-md-8 text-center">
                            <img
                                src="/storage/images/co-logo.jpg"
                                alt="profile-image"
                                className="rounded-circle w-75 border p-2"
                            ></img>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="card-title font-weight-bold">Corporate</h4>
                        <h5 className="text-muted">Software</h5>
                    </div>
                    <div className="w-100 p-4 text-center job-card-footer">
                        <hr className="w-75"></hr>
                        <h5>
                            <strong>Full Stack Web Developer</strong>
                        </h5>
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="text-muted">Full Time</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="text-muted">5 days ago</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobCard;
