import React from "react";
import ProfilePicture from "./profile_picture";
import SkillsTab from "./skills_tab";
import ProfileTab from "./profile_tab";
import PortfolioTab from "./portfolio_tab";
import axios from "axios";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.axs = this.axs.bind(this);
        this.first_attempt = this.first_attempt.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        //Profile ID
        axios
            .get("/profile/21")
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .then(json => {
                // this.setState({ tasks: json });
            });
    }

    first_attempt() {
        if (this.props.first_attempt === true) {
            return (
                <div className="alert alert-info alert-dismissible rounded mt-5">
                    <a
                        href="#"
                        className="close"
                        data-dismiss="alert"
                        aria-label="close"
                    >
                        &times;
                    </a>
                    <h3>
                        {" "}
                        Welcome to <b className="navbar-brand">Hired!</b>For a better experience! Complete your profile
                    </h3>
                    <img
                        src="/storage/images/first-attempt2.png"
                        className="mx-auto rounded"
                        alt="avatar"
                        style={{ width: "70%" }}
                    ></img>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="container text-center">{this.first_attempt()}</div>
                <div
                    className="container mt-5 bg-light p-5 rounded mb-5 h-100"
                    // style={{ height: "1100px" }}
                >
                    {/* Profile Picture */}
                    <ProfilePicture></ProfilePicture>

                    <div className="row my-2">
                        <div className="col-lg-12 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a
                                        href=""
                                        data-target="#edit"
                                        data-toggle="tab"
                                        className="nav-link active"
                                    >
                                        Edit
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href=""
                                        data-target="#skills"
                                        data-toggle="tab"
                                        className="nav-link"
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href=""
                                        data-target="#portfolio"
                                        data-toggle="tab"
                                        className="nav-link"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                {/* Tabs */}
                                <ProfileTab></ProfileTab>
                                <SkillsTab></SkillsTab>
                                <PortfolioTab></PortfolioTab>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;

// if (document.getElementById("root")) {
//     ReactDOM.render(<EditProfile />, document.getElementById("root"));
// }
