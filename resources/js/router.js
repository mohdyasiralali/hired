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
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
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
// if (root) {
// ReactDOM.render(<JobsHeader />, document.getElementById("root"));
// }

// ============================== NAVBAR ITEMS / LINKS
class NavLinks extends React.Component {
    constructor(props) {
        super(props);
        this.onClickJobs = this.onClickJobs.bind(this);
    }

    componentDidMount() {}

    onClickJobs(e) {
        if (root) {
            body.style = "background-color: #e6e9f0";
            ReactDOM.render(<JobsHeader />, document.getElementById("root"));
        }
    }

    render() {
        return (
            <li className="nav-item">
                <button className="btn btn-primary btn-round mr-2">
                    Messaging
                </button>
                <button
                    className="btn btn-primary btn-round mr-2"
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
            auth_user_id: null
        };

        this.onClickViewProfile = this.onClickViewProfile.bind(this);
    }
    // =================================== GET USER ID
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/authenticated_user").then(response => {
            // console.log(response.data);
            this.setState({ auth_user_id: response.data });
        });
    }

    // =================================== USER PROFILE + EDIT

    onClickViewProfile() {
        if (root) {
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <UserProfile user_id={this.state.auth_user_id} />,
                document.getElementById("root")
            );
        }
    }

    // =================================== COMPANY PROFILE / PAGE

    onClickCoProfile() {
        if (root) {
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <CompanyProfile />,
                document.getElementById("root")
            );
        }
    }

    // =================================== ON CLICK CREATE CO PAGE

    onClickRenderCreate() {}

    // =================================== NAVBAR DROPDOWN LINKS TO RENDER

    companies() {
        return (
            <div>
                <button
                    className="dropdown-item"
                    onClick={this.onClickCoProfile}
                >
                    Corporate Example
                </button>
            </div>
        );
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
                        onClick={this.c}
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
                    <CompanyEditProfile create={1}></CompanyEditProfile>
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
