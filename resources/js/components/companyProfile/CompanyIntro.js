import React from "react";
import CompanyOverview from "./CompanyOverview";
import CompanySkills from "./CompanySkills";
import CompanyJobs from "./CompanyJobs";
import CompanyMatching from "./CompanyMatching";
import CompanyApplications from "./CompanyApplications";
import CompanyEditProfile from "./CompanyEdit";
import JobsPanel from "./jobsPanel/JobsPanel";
import Submissions from "./Submissions";

class CompanyIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: 0
        };
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
    // ===================================================== RENDER TABS
    //     <CompanyJobs
    //       co_id={this.props.co_id}
    //       auth={this.state.auth}
    //     ></CompanyJobs>

    renderTab() {
        if (this.state.auth === 1) {
            return (
                <div className="row my-5">
                    <div className="col-lg-12">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#editTab"
                                    data-toggle="tab"
                                    className="nav-link active"
                                >
                                    Edit
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#jobsTab"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Challenges
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#submissionsTab"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Submissions
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#matchingTab"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Matching
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="editTab">
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
                            <div className="tab-pane" id="jobsTab">
                                <JobsPanel co_id={this.props.co_id}></JobsPanel>
                            </div>
                            <div className="tab-pane" id="submissionsTab">
                                <Submissions
                                    co_id={this.props.co_id}
                                ></Submissions>
                            </div>
                            <div className="tab-pane" id="matchingTab">
                                <CompanyMatching></CompanyMatching>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    // ===================================================== RENDER TABS

    render() {
        // console.log('pst  1 ', this.props.skills)
        return (
            <div>
                <section className="mb-5 p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 p-5 bg-light rounded">
                                <div className="intro rounded mb-5 p-3">
                                    <div className="profile-img border border-light border-3">
                                        <img
                                            className="w-100"
                                            src="/storage/images/co-logo.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                    <h2 className="mt-3">
                                        <b>{this.props.name}</b>
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
                            <div className="col-md-7">
                                <CompanyOverview
                                    overview={this.props.overview}
                                ></CompanyOverview>
                                <CompanySkills
                                    skills={this.props.skills}
                                ></CompanySkills>
                            </div>
                        </div>
                    </div>

                    <div className="container">{this.renderTab()}</div>
                </section>{" "}
            </div>
        );
    }
}
export default CompanyIntro;
