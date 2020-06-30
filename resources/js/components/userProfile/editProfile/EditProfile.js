import React from "react";
import ProfilePicture from "./ProfilePicture";
import SkillsTab from "./SkillsTab";
import ProfileTab from "./ProfileTab";
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
            .get("/api/profile/" + this.props.user_id)
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({ profile: json.profile });
                this.setState({ skills: json.skills });
            });
    }
    get_skills() {
        axios
            .get("/api/skills")
            .then(response => {
                return response.data;
            })
            .then(json => {
                this.setState({ sys_skills: json });
            });
    }

    // ============================================ EDIT? SAVE
    save(updatedProfile) {
        axios
            .put("/api/profile/" + this.props.user_id + "/edit", updatedProfile)
            .then(response => {
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

    savepp(image) {
        axios.post("/api/image/upload", image).then(resposne => {});
    }
    // ===================================================================== MAIN RENDER

    render() {
        return (
            <div>
                <div className="container mt-5 bg-light p-5 rounded mb-5 h-100">
                    {/* Profile Picture */}
                    <ProfilePicture
                        avatar={this.state.profile.avatar}
                        savepp={this.savepp.bind(this)}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;
