import React from "react";
import ReactDOM from "react-dom";
import EditProfile from "./editProfile/edit_profile";

class UserProfileIntro extends React.Component {
    constructor(props) {
        super(props);
        this.renderEdit = this.renderEdit.bind(this);
    }

    renderEdit() {
        const body = document.getElementById("body");
        const root = document.getElementById("root");
        if (root) {
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(<EditProfile />, document.getElementById("root"));
        }
    }
    render() {
        return (
            <section className="intro-section mb-5">
                <div className="container">
                    <div className="top-right">
                        <a href="#" className="btn btn-danger btn-round mr-2">
                            Hire Me!
                        </a>
                        <button
                            className="btn btn-danger btn-round mr-2"
                            onClick={this.renderEdit}
                        >
                            Edit Profile
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-lg-5">
                            <div className="intro rounded mb-5">
                                <div className="profile-img border border-light border-3">
                                    <img
                                        className="w-100"
                                        src="/storage/images/avatar.png"
                                        alt=""
                                    ></img>
                                </div>
                                <div>
                                    <h2 className="mt-3">
                                        <b>Mohamnad</b>
                                    </h2>
                                    <h4>Key Account Manager</h4>
                                    <ul className="list-group my-4 list-unstyled">
                                        <li>
                                            <b>Email Address: </b>
                                            mohd.alali@gmailcom
                                        </li>
                                        <li>
                                            <b>Born:</b> August 25, 1987{" "}
                                        </li>
                                    </ul>
                                    <a href="#">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfileIntro;
