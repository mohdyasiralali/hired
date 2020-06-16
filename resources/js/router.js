// REFERENCES | Sweet popups
// https://sweetalert2.github.io/
// npm install sweetalert2
// import Swal from "sweetalert2";

import React from "react";
import ReactDOM from "react-dom";
import JobsHeader from "./components/jobs/JobsHeader";
import UserProfile from "./components/userProfile/UserProfile";
import CompanyProfile from "./components/companyProfile/CompanyProfile";
import EditProfile from "./components/userProfile/editProfile/EditProfile";
import CompanyEditProfile from "./components/companyProfile/CompanyEdit";
import Swal from "sweetalert2";
import Blog from "./components/Blog";
import Companies from './components/Companies';
import Chats from "./components/Chats";
// CommonJS
const body = document.getElementById("body");
const root = document.getElementById("root");

// ============================== ONLOAD CHECK FIRST ATTEMPT

function axs() {
    axios.get("/first_attempt").then(response => {
        if (response.data.first_attempt === 1) {
            Swal.fire({
                imageUrl: "/storage/images/first-attempt2.png",
                imageHeight: 400,
                title: 'Welcome to <b class="ml-2 brand">Hired!</b>',
                html: "For a better experience! Complete your profile",
                imageAlt: "Welcome Image"
            });
            ReactDOM.render(
                <EditProfile user_id={response.data.user_id} />,
                document.getElementById("root")
            );
        } else {
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
        }
    });
}
axs();

// ============================== NAVBAR ITEMS / LINKS
class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.onClickJobs = this.onClickJobs.bind(this);
        this.onClickCompanies = this.onClickCompanies.bind(this);
        this.onClickChats = this.onClickChats.bind(this);
    }

    onClickJobs(e) {
        if (root) {
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
        }
    }
    onClickCompanies(e) {
        if (root) {
            ReactDOM.render(<Companies />, document.getElementById("root"));
        }
    }

    onClickChats(e) {
        if (root) {
            ReactDOM.render(<Chats />, document.getElementById("root"));
        }
    }

    onClickBlog(e) {
        if (root) {
            ReactDOM.render(<Blog />, document.getElementById("root"));
        }
    }

    render() {
        return (
            <li className="nav-item text-right d-flex">
                <button
                    style={{ fontSize: "1em" }}
                    className="btn btn-light mr-2"
                    onClick={this.onClickJobs}
                >
                    <i className="fas fa-briefcase mr-2"></i>Jobs
                </button>
                <button
                    style={{ fontSize: "1em" }}
                    className="btn btn-light mr-2"
                    onClick={this.onClickBlog.bind(this)}
                >
                    <i className="fas fa-newspaper mr-2"></i>Blog
                </button>
                <button
                    style={{ fontSize: "1em" }}
                    className="btn btn-light mr-2"
                    onClick={this.onClickCompanies}
                >
                    <i className="far fa-handshake mr-2"></i>Companies
                </button>
                <button
                    style={{ fontSize: "1em" }}
                    className="btn btn-light mr-2"
                    onClick={this.onClickChats}
                >
                    <i className="fas fa-comments mr-2"></i>Chats
                </button>
            </li>
        );
    }
}
export default NavLinks;

let nav_links = document.getElementById("nav-links");
if (nav_links) {
    ReactDOM.render(<NavLinks />, document.getElementById("nav-links"));
}
// =============================================================================

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            auth_user_id: null,
            companies: []
        };

        this.onClickViewProfile = this.onClickViewProfile.bind(this);
        this.onClickCoProfile = this.onClickCoProfile.bind(this);
    }
    // =================================== GET USER ID
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/authenticated_user").then(response => {
            this.setState({ auth_user_id: response.data.user_id });
            this.setState({ companies: response.data.companies });
        });
    }

    // =================================== USER PROFILE + EDIT

    onClickViewProfile() {
        if (root) {
            ReactDOM.render(
                <UserProfile user_id={this.state.auth_user_id} />,
                document.getElementById("root")
            );
        }
    }

    // =================================== COMPANY PROFILE / PAGE

    onClickCoProfile(e) {

        let index = parseInt(e.target.id) - 1;
        let company = this.state.companies[index];
        if (root) {
            ReactDOM.render(
                <CompanyProfile
                    co_id={index + 1}
                    name={company.company.name}
                    industry={company.company.industry}
                    headquarter={company.company.headquarter}
                    website={company.company.website}
                    overview={company.company.overview}
                    skills={company.skills}
                />,
                document.getElementById("root")
            );
        }
    }

    // =================================== ON CLICK CREATE CO PAGE

    // onClickRenderCreate() {}

    // =================================== NAVBAR DROPDOWN LINKS TO RENDER

    companies() {
        return this.state.companies.map(element => {
            return (
                <div key={element.company.id}>
                    <button
                        id={element.company.id}
                        className="dropdown-item"
                        onClick={this.onClickCoProfile}
                    >
                        {element.company.name}
                    </button>
                </div>
            );
        });
    }
    main() {
        return (
            <div>
                <div>
                    <button
                        className="dropdown-item"
                        onClick={this.onClickViewProfile}
                    >
                        <i className="fas fa-id-card-alt mr-3"></i>View Profile
                    </button>
                    <button
                        type="button"
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#createPage"
                    >
                        <i className="fas fa-plus mr-3"></i>Create Company Profile
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.main()}
                {this.companies()}
            </div>
        );
    }
}

let navbar_options = document.getElementById("nav-dropdown");
if (navbar_options) {
    ReactDOM.render(<NavDropdown />, document.getElementById("nav-dropdown"));
}
// ----------------------------------------------
// =================================================================CREATE MODAL

const createPageModal = (
    // {/* <!-- Modal --> */}
    <div
        className="modal fade"
        id="createPage"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="createPageModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="createPageModalLabel">
                        Create New Comapny Profile
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
                    <CompanyEditProfile
                        create={1}
                        name=""
                        industry=""
                        headquarter=""
                        website=""
                        overview=""
                    ></CompanyEditProfile>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
);
if (document.getElementById("modal")) {
    ReactDOM.render(createPageModal, document.getElementById("modal"));
}
// =========================================== END MODAL
