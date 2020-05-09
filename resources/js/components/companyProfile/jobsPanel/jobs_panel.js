import React from "react";
// import JobEdit from "./job_edit";
import AddJobModal from "./add-job-modal";
import JobRecruiter from "./recruiter-job";

class JobsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    redner_jobs() {
        return (
            <div>
                <JobRecruiter></JobRecruiter>
                <JobRecruiter></JobRecruiter>
                <JobRecruiter></JobRecruiter>
            </div>
        );
    }

    render() {
        return (
            <section className="my-5">
                <div className="container p-5 bg-light rounded">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Jobs</b>
                                </h3>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-round"
                                data-toggle="modal"
                                data-target="#newJob"
                            >
                                <i className="fas fa-plus mr-2"></i>Add Job
                            </button>
                        </div>
                    </div>
                    <div className="container mt-5">
                        {this.redner_jobs()}
                    </div>
                </div>
                {/* // <!-- Modal --> */}
                <AddJobModal></AddJobModal>
            </section>
        );
    }
}

export default JobsPanel;
