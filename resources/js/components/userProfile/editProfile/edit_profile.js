import React from "react";
import ProfilePicture from "./profile_picture";
import SkillsTab from "./skills_tab";
import ProfileTab from "./profile_tab";
import PortfolioTab from "./portfolio_tab";
import axios from "axios";
import Swal from "sweetalert2";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            skills: [],
            sys_skills: []
        };

        this.axs = this.axs.bind(this);
    }

    // ============================================ ON LOAD

    componentDidMount() {
        this.axs();
        this.get_skills();
    }

    axs() {
        axios
            .get("/profile/" + this.props.user_id)
            .then(response => {
                // console.log("from user id", response.data);
                return response.data;
            })
            .then(json => {
                this.setState({ profile: json.profile });
                this.setState({ skills: json.skills });
            });
    }
    get_skills() {
        axios
            .get("/skills")
            .then(response => {
                // console.log("SKILLS", response.data);
                return response.data;
            })
            .then(json => {
                this.setState({ sys_skills: json });
            });
    }

    // ============================================ EDIT? SAVE
    save(updatedProfile) {
        axios
            .put("/profile/" + this.props.user_id + "/edit", updatedProfile)
            .then(response => {
                // console.log("save", response.data);
                return response.data;
            })
            .then(json => {
                this.setState({ profile: json.profile });
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Updated",
                    showConfirmButton: false,
                    timer: 2000
                });
            });
    }
    // =============================================

    render() {
        return (
            <div>
                <div
                    className="container mt-5 bg-light p-5 rounded mb-5 h-100"
                    // style={{ height: "1100px" }}
                >
                    {/* Profile Picture */}
                    <ProfilePicture
                        avatar={this.state.profile.avatar}
                    ></ProfilePicture>

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
                                {/* <li className="nav-item">
                                    <a
                                        href=""
                                        data-target="#skills"
                                        data-toggle="tab"
                                        className="nav-link"
                                    >
                                        Skills
                                    </a>
                                </li> */}
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
                                <ProfileTab
                                    name={this.state.profile.name}
                                    email={this.state.profile.email}
                                    bd={this.state.profile.birth_day}
                                    profession={this.state.profile.profession}
                                    fb={this.state.profile.facebook_profile}
                                    linkedin={this.state.profile.linked_profile}
                                    bio={this.state.profile.bio}
                                    save={this.save.bind(this)}
                                    skills={
                                        <SkillsTab
                                            sys_skills={this.state.sys_skills}
                                            skills={this.state.skills}
                                        ></SkillsTab>
                                    }
                                ></ProfileTab>
                                {/* <SkillsTab
                                    sys_skills={this.state.sys_skills}
                                    skills={this.state.skills}
                                ></SkillsTab> */}
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
