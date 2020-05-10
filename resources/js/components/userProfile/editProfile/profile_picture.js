import React from "react";

class ProfilePicture extends React.Component {
    render() {
        return (
            <div id="profile-image" className="text-center">
                <img
                    src={this.props.avatar}
                    className="mx-auto rounded"
                    alt="avatar"
                    style={{width:"25%"}}
                ></img>
                <label className="custom-file">
                    <input
                        type="file"
                        id="file"
                        className="custom-file-input"
                    ></input>
                    <span className="custom-file-control btn btn-danger">
                        <i className="far fa-caret-square-up"></i> Choose file
                    </span>
                </label>
            </div>
        );
    }
}

export default ProfilePicture;
