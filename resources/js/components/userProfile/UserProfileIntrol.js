import React from "react";
import ReactDOM from "react-dom";
import EditProfile from "./editProfile/EditProfile";
import UserProfileBio from "./UserProfileBio";
import UserProfileSkills from "./UserProfileSkills";
import UserProfilePortfolio from "./UserProfilePortfolio";
import {user} from "../../AuthenticatedUser";

class UserProfileIntro extends React.Component {
    constructor(props) {
        super(props);
        this.renderEdit = this.renderEdit.bind(this);
    }

    renderEdit() {
        const root = document.getElementById("root");
        if (root) {
            ReactDOM.render(
                <EditProfile user_id={this.props.user_id} />,
                document.getElementById("root")
            );
        }
    }
    renderPortfolio() {
        if (this.props.profile_id !== undefined) {
            return (
                <div className="row">
                    <UserProfilePortfolio
                        profile_id={this.props.profile_id}
                        user_id = {this.props.user_id}
                    ></UserProfilePortfolio>
                </div>
            );
        }
    }
    render() {
        let hidden = false;
        if (this.props.user_id !== user.user_id) {
            hidden = true;
        }
        return (
            <section className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-5 bg-light p-4 rounded">
                            <div className="intro rounded mb-5">
                                <div className="profile-img border border-light border-3">
                                    <img
                                        className="w-100"
                                        src={this.props.avatar}
                                        alt=""
                                    ></img>
                                </div>
                                <div>
                                    <h2 className="mt-3">
                                        <b>{this.props.name}</b>
                                    </h2>
                                    <h4>{this.props.profession}</h4>
                                    <ul className="list-group my-4 list-unstyled">
                                        <li>
                                            <b>Email Address: </b>
                                            {this.props.email}
                                        </li>
                                        <li>
                                            <b>Born:</b> {this.props.bd}{" "}
                                        </li>
                                    </ul>
                                    <div>
                                        <a href={this.props.fb}>
                                            <i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                        <a href={this.props.linkedin}>
                                            <i className="fab fa-facebook fa-2x"></i>
                                        </a>
                                    </div>

                                    <div className="mt-1">
                                        <button
                                            className="btn btn-outline-primary btn-round mr-2 mb-3"
                                            onClick={this.renderEdit}
                                            hidden={hidden}
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <UserProfileBio
                                bio={this.props.bio}
                            ></UserProfileBio>
                            <UserProfileSkills
                                skills={this.props.skills}
                            ></UserProfileSkills>
                        </div>
                    </div>
                    {this.renderPortfolio()}
                </div>
            </section>
        );
    }
}

export default UserProfileIntro;
