import React from "react";

class SkillsTab extends React.Component {
    renderSelectedSkills() {
        return (
            <div>
                <button className="btn btn-sm btn-info btn-round mr-1">
                    React
                </button>
            </div>
        );
    }

    renderSkills() {
        return (
            <div>
                <button className="btn btn-sm btn-info btn-round mr-1">
                    React
                </button>
            </div>
        );
    }

    render() {
        return (
            <div className="tab-pane" id="skills">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Available Skills</h5>
                                    {this.renderSkills()}
                                </div>
                                <div className="col-md-6">
                                    <h5>Selected Skills</h5>
                                    {this.renderSkills()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsTab;
