import React from "react";

class CompanySKills extends React.Component {
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
                                    <strong>REQUIRED SKILLS</strong>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <ul className="row">
                                <li className="col-3">Illustrator</li>
                                <li className="col-3">Photoshop</li>
                                <li className="col-3">Video Editing</li>
                                <li className="col-3">Microsoft Office</li>
                                <li className="col-3">HTML</li>
                                <li className="col-3">Illustrator</li>
                                <li className="col-3">Illustrator</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanySKills;
