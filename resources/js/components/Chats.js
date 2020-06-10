import React from "react";
import { database } from "../Firebase";
import { user } from "../AuthenticatedUser";

class Chats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            list_users: [],
            message_input: "",
            current_user: []
        };

        this.chatRef = database.ref("Chats/user-" + user.user_id);
        this.onClickTab = this.onClickTab.bind(this);
    }

    componentDidMount() {
        this.on();
    }

    on() {
        if (this.props.user) {
            // ======================== Add New Chats
            database
                .ref("Chats/user-" + user.user_id)
                .child(this.props.user.user_id)
                .set({
                    id: this.props.user.user_id,
                    name: this.props.user.user_name,
                    avatar: this.props.user.user_avatar,
                    email: this.props.user.user_email
                });

            database
                .ref("Chats/user-" + this.props.user.user_id)
                .child(user.user_id)
                .set({
                    id: user.user_id,
                    name: user.profile.name,
                    avatar: user.profile.avatar,
                    email: user.profile.email
                });

            // ======================= Add New Messages-Channel
            let ref = "";
            if (user.user_id > this.props.user.user_id) {
                ref =
                    "Messages/chat-" +
                    this.props.user.user_id +
                    "-" +
                    user.user_id;
            } else {
                ref =
                    "Messages/chat-" +
                    user.user_id +
                    "-" +
                    this.props.user.user_id;
            }

            database
                .ref(ref)
                .child(0)
                .set({
                    index: 0,
                    messageText: "This is the top of this conversation",
                    timestamp: Date.now() //for now
                });
        }

        // ======================= Get Chat List
        let list_users = this.state.list_users;

        this.chatRef.on("child_added", snapshot => {
            list_users.push({
                name: snapshot.val().name,
                avatar: snapshot.val().avatar,
                email: snapshot.val().email,
                id: snapshot.val().id
            });
            this.setState({ list_users: list_users });
        });
    }

    onChangeMessage(e) {
        this.setState({ message_input: e.target.value });
    }

    onClickSend(e) {
        let ref = "";
        if (user.user_id > this.state.current_user.id) {
            ref =
                "Messages/chat-" +
                this.state.current_user.id +
                "-" +
                user.user_id;
        } else {
            ref =
                "Messages/chat-" +
                user.user_id +
                "-" +
                this.state.current_user.id;
        }

        database
            .ref(ref)
            .push()
            .set({
                messageText: this.state.message_input,
                timestamp: Date.now(), //for now
                senderId: user.user_id,
                receiverId: this.state.current_user.id
            });
        this.setState({ message_input: "" });
    }

    onKeyPress(e) {
        if (e.key !== "Enter") return;
        this.onClickSend();
    }

    renderMessages() {
        if (this.state.messages.length === 0) {
            return (
                <div>
                    <img
                        src="/storage/images/chat_alt.png"
                        className="w-100"
                    ></img>
                </div>
            );
        }

        let key = 0;
        return this.state.messages.map(message => {
            key = key + 1;
            console.log(message);
            if (
                message.senderId === undefined &&
                message.receiverId === undefined
            ) {
                return (
                    <div div key={key} className="w-100 text-center my-4">
                        <h6 className="p-1 bg-info text-white btn-round d-inline">
                            {message.messageText}
                        </h6>
                    </div>
                );
            }
            if (message.senderId === user.user_id) {
                return (
                    <div key={key}>
                        <div className="row no-gutters">
                            <div className="col-md-5 offset-md-7">
                                <div className="chat-bubble chat-bubble--right">
                                    {message.messageText}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={key}>
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <div className="chat-bubble chat-bubble--left">
                                    {message.messageText}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }

    renderTopTab() {
        if (this.state.current_user.length === 0) {
            return <h5>Start Chatting</h5>;
        }
        return (
            <div className="friend-drawer no-gutters friend-drawer--grey">
                <img
                    className="chats-profile-image"
                    src={this.state.current_user.avatar}
                    alt="avatar"
                ></img>
                <div className="text my-auto">
                    <h6>
                        <b>{this.state.current_user.name}</b>
                    </h6>
                    <h6>{this.state.current_user.email}</h6>
                </div>
            </div>
        );
    }
    onClickTab(current_user) {
        let ref = "";
        if (user.user_id > current_user.id) {
            ref = "Messages/chat-" + current_user.id + "-" + user.user_id;
        } else {
            ref = "Messages/chat-" + user.user_id + "-" + current_user.id;
        }

        let messageRef = database.ref(ref);

        this.setState({ messages: [] });
        let messages = [];
        let elem = document.getElementById("messages_div");

        messageRef.limitToLast(100).on("child_added", snapshot => {
            messages.push({
                messageText: snapshot.val().messageText,
                senderId: snapshot.val().senderId,
                receiverId: snapshot.val().receiverId
            });
            this.setState({ messages: messages });
            setTimeout(() => {
                elem.scrollTop = elem.scrollHeight;
            }, 20);
        });

        this.setState({ current_user: current_user });
    }

    renderTabs() {
        let key = 0;
        return this.state.list_users.map(user => {
            key = key + 1;
            return (
                <div key={key}>
                    <div
                        className="friend-drawer friend-drawer--onhover"
                        onClick={() => this.onClickTab(user)}
                    >
                        <img
                            className="chats-profile-image"
                            src={user.avatar}
                            alt="avatar"
                        ></img>
                        <div className="text my-auto">
                            <h6>
                                <b>{user.name}</b>
                            </h6>
                            <h6>{user.email}</h6>
                        </div>
                    </div>
                    <hr className="chats-hr"></hr>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container chats-container">
                <div className="row no-gutters  main-row">
                    <div className="col-md-4 border-right">
                        <div className="settings-tray d-flex">
                            <img
                                className="chats-profile-image"
                                src={user.profile.avatar}
                                alt="avatar"
                            ></img>
                            <div className="ml-3 text my-auto">
                                <h6>
                                    <b>{user.profile.name}</b>
                                </h6>
                                <h6>{user.profile.email}</h6>
                            </div>
                        </div>
                        <div>{this.renderTabs()}</div>
                    </div>
                    <div className="col-md-8">
                        <div className="settings-tray">
                            {this.renderTopTab()}
                        </div>
                        <div className="chat-panel">
                            <div
                                style={{ overflow: "auto", maxHeight: "490px" }}
                                id="messages_div"
                            >
                                {this.renderMessages()}
                            </div>
                            <div className="row send-box mx-auto">
                                <div className="col-12">
                                    <div className="chat-box-tray">
                                        <input
                                            type="text"
                                            className="chats-input px-4"
                                            placeholder="Type your message here..."
                                            value={this.state.message_input}
                                            onChange={this.onChangeMessage.bind(
                                                this
                                            )}
                                            onKeyPress={this.onKeyPress.bind(
                                                this
                                            )}
                                        ></input>
                                        <button
                                            className="btn btn-info btn-round"
                                            onClick={this.onClickSend.bind(
                                                this
                                            )}
                                        >
                                            <i className="fas fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chats;
