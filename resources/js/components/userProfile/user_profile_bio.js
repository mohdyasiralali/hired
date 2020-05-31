import React from "react";

class UserProfileBio extends React.Component {
    render() {
        return (
            <section>
                <div className="container p-5 bg-light rounded">
                    <div className="row">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>About me</b>
                                </h3>
                                <h6>
                                    <strong>PROFESSIONAL PATH</strong>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <p>{this.props.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfileBio;
