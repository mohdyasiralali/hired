import React from "react";
import CompanyOverview from "./company_overview";
import CompanySkills from "./company_skills";
import CompanyJobs from "./company_jobs";
import CompanyMatching from "./company_matching";
import CompanyApplications from "./company_applications";
import CompanyEditProfile from "./company_edit";
import JobsPanel from "./jobs_panel";

class CompanyIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        };

        this.onClickApplicants = this.onClickApplicants.bind(this);
        this.onClickApplications = this.onClickApplications.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickJobsPanel = this.onClickJobsPanel.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
    }

    onClickApplicants() {
        this.setState({ tab: 1 });
    }
    onClickApplications() {
        this.setState({ tab: 2 });
    }
    onClickEdit() {
        this.setState({ tab: 3 });
    }
    onClickJobsPanel() {
        this.setState({ tab: 4 });
    }
    onClickHome(e) {
        e.preventDefault();
        this.setState({ tab: 0 });
    }

    render_body() {
        if (this.state.tab === 0) {
            return (
                <div>
                    <CompanyOverview></CompanyOverview>
                    <CompanySkills></CompanySkills>
                    <CompanyJobs></CompanyJobs>
                </div>
            );
        } else if (this.state.tab === 1) {
            return (
                <div>
                    <CompanyMatching></CompanyMatching>
                </div>
            );
        } else if (this.state.tab === 2) {
            return (
                <div>
                    <CompanyApplications></CompanyApplications>
                </div>
            );
        } else if (this.state.tab === 3) {
            return (
                <div>
                    <CompanyEditProfile></CompanyEditProfile>
                </div>
            );
        } else if (this.state.tab === 4) {
            return (
                <div>
                    <JobsPanel></JobsPanel>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <section className="intro-section mb-5">
                    <div className="container">
                        <div className="top-right">
                            <button
                                onClick={this.onClickApplicants}
                                className="btn btn-danger btn-round mr-2"
                            >
                                Matching
                            </button>
                            <button
                                onClick={this.onClickApplications}
                                className="btn btn-danger btn-round mr-2"
                            >
                                Applications
                            </button>
                            <button
                                onClick={this.onClickJobsPanel}
                                className="btn btn-danger btn-round mr-2"
                            >
                                Jobs
                            </button>
                            <button
                                onClick={this.onClickEdit}
                                className="btn btn-danger btn-round mr-2"
                            >
                                Profile Settings
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 col-lg-5">
                                <div className="intro rounded mb-5">
                                    <div className="profile-img border border-light border-3">
                                        <img
                                            className="w-100"
                                            src="/storage/images/co-logo.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h2 className="mt-3">
                                        <a
                                            href=""
                                            onClick={this.onClickHome}
                                            className="text-decoration-none"
                                        >
                                            <b>Coroporate</b>
                                        </a>
                                    </h2>
                                    <ul className="list-group my-4 list-unstyled">
                                        <li>
                                            <b>Industry: </b>Software
                                        </li>
                                        <li>
                                            <b>Headquarters: </b>Beirut, Lebanon
                                        </li>
                                        <li>
                                            <b>Website: </b>
                                            https://www.coroporate.com
                                        </li>
                                        <li>
                                            <b>Founded:</b>1987
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {this.render_body()}
            </div>
        );
    }
}
export default CompanyIntro;
