import React from "react";
// import JobEdit from "./job_edit";
import AddJobModal from "./add-job-modal";
import JobRecruiter from "./recruiter-job";
import Swal from "sweetalert2";

class JobsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
        this.onJobAdd = this.onJobAdd.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/jobs/get/" + this.props.co_id).then(response => {
            // console.log(response.data)
            this.setState({ jobs: response.data });
        });
    }

    onJobAdd(job) {
        let temp = this.state.jobs;
        temp.push(job);
        this.setState({ jobs: temp });
    }
    deleteJob(job) {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.value) {
                axios
                    .delete("/job/delete/" + job.id)
                    .then(response => {
                        Swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        );
                        return response.data;
                    })
                    .then(json => {
                        let jobs = this.state.jobs;
                        const index = jobs.indexOf(job);
                        if (index > -1) {
                            jobs.splice(index, 1);
                        }
                        this.setState({ jobs: jobs });
                    });
            }
        });
    }
    redner_jobs() {
        return this.state.jobs.map(job => {
            return (
                <div key={job.id}>
                    <JobRecruiter
                        // job_id={job.id}
                        job={job}
                        deleteJob={this.deleteJob.bind(this)}
                    ></JobRecruiter>
                </div>
            );
        });
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
                    <div className="container mt-5">{this.redner_jobs()}</div>
                </div>
                {/* // <!-- Modal --> */}
                <AddJobModal
                    co_id={this.props.co_id}
                    onJobAdd={this.onJobAdd.bind(this)}
                ></AddJobModal>
            </section>
        );
    }
}

export default JobsPanel;
