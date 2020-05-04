import React from "react";

class UserProfileIntro extends React.Component {
    render() {
        return (
            <section className="intro-section mb-5">
                <div className="container">
                    <div className="top-right">
                        <a href="#" className="btn btn-danger mb-5">
                            Hire Me!
                        </a>
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
