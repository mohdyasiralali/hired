import React from "react";
// import JobEdit from "./job_edit";
import AddJobModal from "./add-job-modal";
import JobRecruiter from "./recruiter-job";
import Swal from "sweetalert2";

class JobsPanel extends React.Component {
    constructor(props) {
        super(props);

        const co_id = this.props.co_id;

        this.state = {
            co_id: co_id,
            challenges: []
            // jobs: []
        };
        this.onClickDeleteChallenge = this.onClickDeleteChallenge.bind(this);
        this.render_modal_questions = this.render_modal_questions.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        // axios.get("/jobs/get/" + this.state.co_id).then(response => {
        //     // console.log(response.data)
        //     this.setState({ jobs: response.data });
        // });

        axios
            .get("/challenges/company/get/" + this.state.co_id)
            .then(response => {
                console.log("Challenges ======> ", response.data);
                this.setState({ challenges: response.data });
            });
    }

    onChallengeAdd(challenge) {
        let temp = this.state.challenges;
        temp.push(challenge);
        this.setState({ challenges: temp });
    }

    // deleteJob(job) {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then(result => {
    //         if (result.value) {
    //             axios
    //                 .delete("/job/delete/" + job.id)
    //                 .then(response => {
    //                     Swal.fire(
    //                         "Deleted!",
    //                         "Your file has been deleted.",
    //                         "success"
    //                     );
    //                     return response.data;
    //                 })
    //                 .then(json => {
    //                     let jobs = this.state.jobs;
    //                     const index = jobs.indexOf(job);
    //                     if (index > -1) {
    //                         jobs.splice(index, 1);
    //                     }
    //                     this.setState({ jobs: jobs });
    //                 });
    //         }
    //     });
    // }

    // updateJob(newjob, job){
    //     // console.log('here we go ======>' ,job)
    //     let url = '/job/update/'+job.id;
    //     console.log(url)
    //     axios.put(url, newjob)
    //     .then(response => {
    //         // console.log(response.data)
    //          // console.log(response);
    //          let jobs = this.state.jobs;
    //          const index = jobs.indexOf(job);
    //          if (index > -1) {
    //              jobs.splice(index, 1);
    //              jobs.push(response.data);
    //          }
    //          this.setState({
    //              jobs: jobs
    //          })

    //     });
    // }

    // redner_jobs() {
    //     return this.state.jobs.map(job => {
    //         return (
    //             <div key={job.id}>
    //                 <JobRecruiter
    //                     // job_id={job.id}
    //                     job={job}
    //                     deleteJob={this.deleteJob.bind(this)}
    //                     updateJob={this.updateJob.bind(this)}
    //                 ></JobRecruiter>
    //             </div>
    //         );
    //     });
    // }

    onClickDeleteChallenge(challenge) {
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
                    .delete("/challenge/delete/" + challenge.challenge_info.id)
                    .then(response => {
                        Swal.fire(
                            "Deleted!",
                            "The Challenge has been deleted.",
                            "success"
                        );
                        return response.data;
                    })
                    .then(json => {
                        let challenges = this.state.challenges;
                        const index = challenges.indexOf(challenge);
                        if (index > -1) {
                            challenges.splice(index, 1);
                        }
                        this.setState({ challenges: challenges });
                    });
            }
        });
    }

    render_modal_questions(questions) {
        return questions.map(question => {
            return (
                <div key={question.id} className="row">
                    <div className="col-md-8">
                        <p>
                            <b>{question.title}</b>
                        </p>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="fas fa-pencil-alt"></i>{" "}
                        </button>{" "}
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            );
        });
    }
    redner_company_challenges() {
        if (this.state.challenges.length === 0) {
            return (
                <div className="my-4">
                    <h5 className="text-muted">No Challenges Yet!</h5>
                </div>
            );
        }
        return this.state.challenges.map(challenge => {
            let modal_id = "modal-questions-" + challenge.challenge_info.id;
            let target_modal = "#" + modal_id;
            return (
                <div
                    key={challenge.challenge_info.id}
                    className="col-md-6 card border border-light p-3 mb-3"
                    style={{ backgroundColor: "#e6e9f0" }}
                >
                    <div>
                        <h3>
                            <b>{challenge.challenge_info.title}</b>
                        </h3>
                        <h6 className="text-muted">
                            {challenge.challenge_info.techs}
                        </h6>
                    </div>{" "}
                    <div className="mt-2 text-right">
                        <button
                            className="btn btn-primary btn-round mr-2"
                            data-toggle="modal"
                            data-target={target_modal}
                        >
                            Questions
                        </button>
                        <button className="btn btn-danger btn-round mr-2">
                            <i className="fas fa-pencil-alt"></i>{" "}
                        </button>
                        <button
                            className="btn btn-danger btn-round mr-2"
                            onClick={() =>
                                this.onClickDeleteChallenge(challenge)
                            }
                        >
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
                    {/* </div> */}
                    {/* <div>{this.render_edit()}</div> */}
                    {/* // =============================================Modal ChaLLENGE QUESTIONS */}
                    <div
                        className="modal fade"
                        id={modal_id}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="QuestionsModalLongTitle"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="QuestionsModalLongTitle"
                                    >
                                        <b>Questions</b>
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <button className="btn btn-danger btn-round mr-2">
                                        <i className="fas fa-plus mr-2"></i>Add
                                        Question{" "}
                                    </button>
                                    <div className="container p-5 mt-1">
                                        {this.render_modal_questions(
                                            challenge.questions
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        // console.log("co_id ====>", this.props.co_id);
        return (
            <section>
                <div className="p-5 bg-light rounded-bottom">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Challenges</b>
                                </h3>
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-round"
                                data-toggle="modal"
                                data-target="#newChallenge"
                            >
                                <i className="fas fa-plus mr-2"></i>Add
                                Challenge
                            </button>
                        </div>
                    </div>
                    {/* <div className="container mt-5">{this.redner_jobs()}</div> */}
                    <div className="container row mt-5">
                        {this.redner_company_challenges()}
                    </div>
                </div>
                {/* // <!-- Modal --> */}
                <AddJobModal
                    co_id={this.props.co_id}
                    onChallengeAdd={this.onChallengeAdd.bind(this)}
                ></AddJobModal>
            </section>
        );
    }
}

export default JobsPanel;
