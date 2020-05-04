import React from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-user"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        required
                    ></input>
                </div>
                <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        required
                    ></input>
                </div>
                <div className="input-group input-group-lg mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-pencil-alt"></i>
                        </span>
                    </div>
                    <textarea
                        className="form-control"
                        name="message-body"
                        placeholder="Message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-primary btn-round btn-block btn-lg btn-get-started"
                ></input>
            </form>
        );
    }
}

if (document.getElementById("contact-form")) {
    ReactDOM.render(<ContactForm />, document.getElementById("contact-form"));
}
