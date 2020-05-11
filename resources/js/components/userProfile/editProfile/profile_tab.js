import React from "react";

class ProfileTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            bd: "",
            profession: "",
            fb:"",
            linkedin:"",
            bio:""
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBD = this.onChangeBD.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onChangefb = this.onChangefb.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeBio = this.onChangeBio.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeBD(e) {
        this.setState({ bd: e.target.value });
    }
    onChangeProfession(e) {
        this.setState({ profession: e.target.value });
    }
    onChangefb(e) {
        this.setState({ fb: e.target.value });
    }
    onChangeLinkedin(e){
        this.setState({ linkedin: e.target.value });
    }
    onChangeBio(e){
        this.setState({ bio: e.target.value });
    }

    saveChanges(e) {
        e.preventDefault();
        // console.log('STATE', this.state)
        let updatedProfile = {
            'name' : (this.state.name === "" ? this.props.name : this.state.name),
            'bd' : (this.state.bd === "" ? this.props.bd : this.state.bd),
            'profession' : (this.state.profession === "" ? this.props.profession : this.state.profession),
            'fb' : (this.state.fb === "" ? this.props.fb : this.state.fb),
            'linkedin' : (this.state.linkedin === "" ? this.props.linkedin : this.state.linkedin),
            'bio' : (this.state.bio === "" ? this.props.bio : this.state.bio)
        };
        // console.log(updateProfile);
        this.props.save(updatedProfile);
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
                                defaultValue={this.props.name}
                                onChange={this.onChangeName}
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
                                defaultValue={this.props.email}
                                readOnly
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Birth Day
                        </label>
                        <div className="col-lg-9">
                            <input
                                className="form-control"
                                type="date"
                                defaultValue={this.props.bd}
                                onChange={this.onChangeBD}
                            ></input>
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
                                defaultValue={this.props.profession}
                                onChange={this.onChangeProfession}
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
                                defaultValue={this.props.fb}
                                onChange={this.onChangefb}
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
                                defaultValue={this.props.linkedin}
                                onChange = {this.onChangeLinkedin}
                            ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-3 col-form-label form-control-label">
                            Bio
                        </label>
                        <div className="col-lg-9">
                            <textarea
                                className="form-control"
                                rows="5"
                                defaultValue={this.props.bio}
                                onChange = {this.onChangeBio}
                            ></textarea>
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
                <hr></hr>
                <h4 className="brand">Skills</h4>
                {this.props.skills}
            </div>
        );
    }
}

export default ProfileTab;
