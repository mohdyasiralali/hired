import React from "react";

class ProfileTab extends React.Component {
    constructor(props){
        super(props)

        this.saveChanges =  this.saveChanges.bind(this);
    }

    saveChanges(e){
        e.preventDefault();
    }

    render() {
        return (
            <div className="tab-pane active" id="edit">
                <form>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Full Name
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="text"
                                // value="eg. John Smith"
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Email
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="email"
                                defaultValue="john.smith@example.com"
                                readOnly
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Birth Day
                        </label>
                        <div className="col-lg-9">
                            <input className="form-control" type="date"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Profession
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="text"
                                // value=""
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Facebook Account
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="url"
                                // value=""
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Linkedin Account
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="url"
                                // value=""
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Bio
                        </label>
                        <div className="col-lg-9">
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="text-right mt-5">
                        <input
                            type="submit"
                            value="Save"
                            className="btn btn-success"
                            onClick={this.saveChanges}
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfileTab;
