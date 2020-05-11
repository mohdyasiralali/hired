import React from "react";

class UserProfileSkills extends React.Component {
    renderSkills() {
        let key = 0;
        return this.props.skills.map(skill => {
            key = key+1;
            return <li className="col-3" key={key}>{skill}</li>;
        });
    }
    render() {
        return (
            <section className="my-5">
                <div className="container p-5 bg-light rounded">
                    <div className="row">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Skills</b>
                                </h3>
                                <h6>
                                    <strong>Gained Skills</strong>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <ul className="row">
                                {this.renderSkills()}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UserProfileSkills;
