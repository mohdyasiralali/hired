import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "../userProfile/UserProfile";
import Chats from '../Chats';

class CompanyMatching extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.render_profiles = this.render_profiles.bind(this);
        this.onClickUserProfile = this.onClickUserProfile.bind(this);
    }

    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/company/matching/" + this.props.co_id).then(response => {
            // console.log('Matching: ' ,response.data);
            this.setState({ users: response.data });
        });
    }

    onClickUserProfile(e, user) {
        e.preventDefault();
        if (document.getElementById("root")) {
            ReactDOM.render(
                <UserProfile user_id={user.id} />,
                document.getElementById("root")
            );
        }
    }
    onClickChat(e, user_param) {
        e.preventDefault();
        let chat_user = {
            user_id : user_param.id,
            user_name : user_param.name,
            user_email : user_param.email,
            user_avatar : user_param.avatar
        }
        ReactDOM.render(
            <Chats user={chat_user}></Chats>,
            document.getElementById("root")
        );
    }

    render_profiles() {
        if (this.state.users.length === 0) {
            return (
                <div className="my-5">
                    <h4 className="text-muted">Loading ..</h4>
                </div>
            );
        }
        return this.state.users.map(curr_user => {
            let avatar = curr_user.avatar;
            let bool = avatar.startsWith("https://");

            let src = "";
            if (bool) {
                src = avatar;
            } else {
                src = "storage/images/users/" + avatar;
            }
            return (
                <div
                    key={curr_user.id}
                    className="card border border-light p-2 mb-3 col-md-4"
                    style={{ backgroundColor: "#e6e9f0" }}
                >
                    <div className="row">
                        <div className="col-md-4 text-center my-auto">
                            <img
                                className="w-75 rounded-circle"
                                src={src}
                                alt=""
                            ></img>
                        </div>
                        <div className="col-md-8 p-2">
                            <h5>
                                <b>
                                    <a
                                        href=""
                                        className="text-decoration-none"
                                        onClick={e =>
                                            this.onClickUserProfile(
                                                e,
                                                curr_user
                                            )
                                        }
                                    >
                                        {curr_user.name}
                                    </a>
                                </b>
                            </h5>
                            <h6 className="text-muted">
                                {curr_user.profession}
                            </h6>
                            <h6 className="text-muted">{curr_user.email}</h6>
                        </div>
                    </div>
                    <div className="text-right mb-2">
                        <button
                            className="btn btn-danger btn-round mr-2"
                            onClick={e => this.onClickChat(e, curr_user)}
                        >
                            Message<i className="far fa-paper-plane ml-2"></i>
                        </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <section>
                <div className="container p-5 bg-light rounded">
                    <div className="row mb-2">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Matching</b>
                                </h3>
                                <h6>
                                    <b>PROFILES MATCHING SKILLS</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">{this.render_profiles()}</div>
                    </div>
                </div>

                {/* <!-- Modal --> */}
                <div
                    className="modal fade"
                    id="suggestModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="suggestModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="suggestModalLabel"
                                >
                                    Modal title
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
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyMatching;
