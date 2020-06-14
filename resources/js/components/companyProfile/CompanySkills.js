import React from "react";

class CompanySKills extends React.Component {
    renderSkills(){
        return this.props.skills.map(skill => {
            return <li key={skill.id} className="col-4">{skill.title}</li>
        })
    }
    render() {
        // console.log('yala wlee',this.props.skills)
        return (
            <section className="mt-3">
                <div className="container p-5 bg-light rounded">
                    <div className="row">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Techs</b>
                                </h3>
                                <h6>
                                    <strong>REQUIRED SKILLS</strong>
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

export default CompanySKills;
