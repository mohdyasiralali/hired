import React from "react";
import { database } from "../Firebase";

class Chats extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            message_input: ""
        };
    }
    componentDidMount() {
        this.on();
    }

    on() {
        let messages = this.state.messages;
        database.ref("Chats/user2").on("child_added", function(snapshot) {
            messages.push(snapshot.val().messageText);
        });
        this.setState({ messages: messages });
    }

    onChangeMessage(e) {
        this.setState({ message_input: e.target.value });
    }

    onClickSend(e) {
        database
            .ref("Chats/user2")
            .push()
            .set({
                messageText: this.state.message_input,
                timestamp: Date.now(), //for now
                senderId: 1,
                receiverId: 2
            });
    }

    renderMessages() {
        // if (this.state.messages !== null) {
        return this.state.messages.map(message => {
            return (
                <div>
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="chat-bubble chat-bubble--left">
                                {message}
                            </div>
                        </div>
                    </div>
                    {/* <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                            <div className="chat-bubble chat-bubble--right">
                                Hello dude!
                            </div>
                        </div>
                    </div> */}
                </div>
            );
        });
        // }
    }

    renderTopTab() {
        // return .map
        return (
            <div className="friend-drawer no-gutters friend-drawer--grey">
                <img
                    className="chats-profile-image"
                    src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
                    alt=""
                ></img>
                <div className="text">
                    <h6>Robo Cop</h6>
                </div>
            </div>
        );
    }

    renderTabs() {
        // return .map
        return (
            <div>
                <div
                    className="friend-drawer friend-drawer--onhover"
                    onClick={this.onClickTab}
                >
                    <img
                        className="chats-profile-image"
                        src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
                        alt=""
                    ></img>
                    <div className="text">
                        <h6>Robo Cop</h6>
                        <p className="text-muted">Hey, you're arrested!</p>
                    </div>
                    <span className="time text-muted small">13:21</span>
                </div>
                <hr className="chats-hr"></hr>
            </div>
        );
    }

    onClickTab() {
        alert("TAB");
    }

    render() {
        return (
            <div className="container chats-container">
                <div className="row no-gutters  main-row">
                    <div className="col-md-4 border-right">
                        <div className="settings-tray">
                            <img
                                className="chats-profile-image"
                                src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg"
                                alt="Profile img"
                            ></img>
                        </div>
                        <div>{this.renderTabs()}</div>
                    </div>
                    <div className="col-md-8">
                        <div className="settings-tray">
                            {this.renderTopTab()}
                        </div>
                        <div className="chat-panel">
                            <div>{this.renderMessages()}</div>
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
