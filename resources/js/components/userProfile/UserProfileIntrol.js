import React from "react";
import ReactDOM from "react-dom";
import EditProfile from "./editProfile/EditProfile";
import UserProfileBio from "./UserProfileBio";
import UserProfileSkills from "./UserProfileSkills";
import UserProfilePortfolio from "./UserProfilePortfolio";

class UserProfileIntro extends React.Component {
    constructor(props) {
        super(props);
        this.renderEdit = this.renderEdit.bind(this);
    }

    renderEdit() {
        // const body = document.getElementById("body");
        const root = document.getElementById("root");
        if (root) {
            // body.style =
            //     "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <EditProfile user_id={this.props.user_id} />,
                document.getElementById("root")
            );
        }
    }
    render() {
        return (
            <section className="p-5">
                {/* <div className="text-right">
                    <button
                        className="btn btn-primary btn-round mr-2"
                        onClick={this.renderEdit}
                    >
                        Edit Profile
                    </button>
                </div> */}
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-10 col-lg-5"> */}
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
                    <div className="row">
                        <UserProfilePortfolio></UserProfilePortfolio>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfileIntro;