import React from "react";
import CompanyOverview from "./company_overview";
import CompanySkills from "./company_skills";
import CompanyJobs from "./company_jobs";
import CompanyMatching from "./company_matching";
import CompanyApplications from "./company_applications";
import CompanyEditProfile from "./company_edit";
import JobsPanel from "./jobsPanel/jobs_panel";

class CompanyIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            auth: 0
        };

        this.onClickApplicants = this.onClickApplicants.bind(this);
        this.onClickApplications = this.onClickApplications.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickJobsPanel = this.onClickJobsPanel.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
        this.renderTab = this.renderTab.bind(this);

    }
    componentDidMount() {
        this.check_user();
    }
    check_user() {
        axios.get("/company/auth/" + this.props.co_id).then(response => {
            this.setState({ auth: response.data });
        });
    }

    // ===================================================== TABS
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
    // ===================================================== TABS
    // ===================================================== RENDER TABS

    render_body() {
        if (this.state.tab === 0) {
            return (
                <div>
                    <CompanyOverview
                        overview={this.props.overview}
                    ></CompanyOverview>
                    <CompanySkills skills={this.props.skills}></CompanySkills>
                    <CompanyJobs co_id={this.props.co_id} auth={this.state.auth}></CompanyJobs>
                </div>
            );
        // } else if (this.state.tab === 1) {
        //     return (
        //         <div>
        //             <CompanyMatching></CompanyMatching>
        //         </div>
        //     );
        // } else if (this.state.tab === 2) {
        //     return (
        //         <div>
        //             <CompanyApplications co_id={this.props.co_id}></CompanyApplications>
        //         </div>
        //     );
        } else if (this.state.tab === 3) {
            return (
                <div>
                    <CompanyEditProfile
                        create={0}
                        name={this.props.name}
                        industry={this.props.industry}
                        headquarter={this.props.headquarter}
                        website={this.props.website}
                        overview={this.props.overview}
                        co_id={this.props.co_id}
                    ></CompanyEditProfile>
                </div>
            );
        } else if (this.state.tab === 4) {
            return (
                <div>
                    <JobsPanel co_id={this.props.co_id}></JobsPanel>
                </div>
            );
        }
    }

    renderTab() {
        if (this.state.auth === 1) {
            return (
                <div className="text-right">
                    {/* <button
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
                    </button> */}
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
            );
        }
    }
    // ===================================================== RENDER TABS

    render() {
        // console.log('pst  1 ', this.props.skills)
        return (
            <div>
                <section className="intro-section mb-5 pb-2">
                    <div className="container">
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
                                            <b>{this.props.name}</b>
                                        </a>
                                    </h2>
                                    <ul className="list-group my-4 list-unstyled">
                                        <li>
                                            <b>Industry: </b>
                                            {this.props.industry}
                                        </li>
                                        <li>
                                            <b>Headquarters: </b>
                                            {this.props.headquarter}
                                        </li>
                                        <li>
                                            <b>Website: </b>
                                            {this.props.website}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.renderTab()}
                    {/* <div className="text-right">
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
                    </div> */}
                </section>{" "}
                {this.render_body()}
            </div>
        );
    }
}
export default CompanyIntro;
