// REFERENCES | Sweet popups
// https://sweetalert2.github.io/
// npm install sweetalert2
// import Swal from "sweetalert2";

import React from "react";
import ReactDOM from "react-dom";
import JobsHeader from "./components/jobs/header";
import UserProfile from "./components/userProfile/user_profile";
import CompanyProfile from "./components/companyProfile/company_profile";
import EditProfile from "./components/userProfile/editProfile/edit_profile";
import CompanyEditProfile from "./components/companyProfile/company_edit";
import Swal from "sweetalert2";
import Challenges from "./components/challenges/challenges";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FreeSolo from "./components/searchUsers";

import { faSearch, faUserTie } from "@fortawesome/free-solid-svg-icons";

// CommonJS
const body = document.getElementById("body");
const root = document.getElementById("root");

// async function auth_user() {
//     await axios
//         .get("/authenticated_user")
//         .then(response => {
//             return response.data;
//         })
//         .then(json => {
//             console.log("json", json);
//             // user = json;
//             return json;
//         });
// }

// ============================== ONLOAD CHECK FIRST ATTEMPT

function axs() {
    axios.get("/first_attempt").then(response => {
        // console.log(response.data);
        if (response.data.first_attempt === 1) {
            Swal.fire({
                imageUrl: "/storage/images/first-attempt2.png",
                imageHeight: 400,
                title: 'Welcome to <b class="ml-2 brand">Hired!</b>',
                html: "For a better experience! Complete your profile",
                imageAlt: "Welcome Image"
            });
            // body.style =
            //     "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <EditProfile user_id={response.data.user_id} />,
                document.getElementById("root")
            );
        } else {
            // body.style =
            //     "background-color: #fff";
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
            // ReactDOM.render(<Challenges quiz_id = {1} />, document.getElementById("root"));
        }
    });
}
axs();
// if (root) {
// ReactDOM.render(<JobsHeader />, document.getElementById("root"));
// }

// ============================== NAVBAR ITEMS / LINKS
class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users : []}
        this.onClickJobs = this.onClickJobs.bind(this);
        // this.onFocusSearchUsers = this.onFocusSearchUsers.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    onClickJobs(e) {
        if (root) {
            // body.style = "background-color: #e6e9f0";
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
        }
    }

    axs() {
        axios.get("/users/get").then(response => {
            this.setState({users : response.data})
            console.log(response.data);
        });
    }

    render() {
        return (
            <li className="nav-item text-right d-flex">
                {/* <button className="btn btn-primary btn-round mr-2">
                    Messaging
                </button> */}
                <div className="bg-light border border-dark d-inline search-field px-3 mr-2 d-flex w-75">
                    <div>
                        <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <div className="ml-3 mr-1" style={{width:"250px"}}>
                        <FreeSolo users = {this.state.users}></FreeSolo>
                    </div>
                    {/* <input
                        type="text"
                        className="py-1 px-3 w-50 field-icon search-field mx-2"
                        onFocus={this.onFocusSearchUsers}
                        onChange={this.onCsdhangeSearch}
                    ></input> */}
                </div>
                {/* <div id="search-box"></div> */}
                <button
                    className="btn btn-dark btn-round mr-2"
                    onClick={this.onClickJobs}
                >
                    Jobs
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
            // console.log(response.data);
            this.setState({ auth_user_id: response.data.user_id });
            this.setState({ companies: response.data.companies });
            // console.log('STATE', this.state);
        });
    }

    // =================================== USER PROFILE + EDIT

    onClickViewProfile() {
        if (root) {
            // body.style =
            //     "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <UserProfile user_id={this.state.auth_user_id} />,
                document.getElementById("root")
            );
        }
    }

    // =================================== COMPANY PROFILE / PAGE

    onClickCoProfile(e) {
        // console.log(this.state.companies);
        // console.log('---------------------------------',e.target.id);
        let index = parseInt(e.target.id) - 1;
        // console.log(this.state.companies[index]);
        let company = this.state.companies[index];
        if (root) {
            // body.style =
            //     "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
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
                        Viewe Profile
                    </button>
                    <button
                        type="button"
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#createPage"
                    >
                        Create Company Profile
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.main()}
                <hr data-content="Companies" className="hr-text"></hr>
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
