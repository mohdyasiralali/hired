import React from "react";
import TextArea from "./text-area";

class JobEdit extends React.Component {
    render() {
        return (
            <div className="container p-5 mb-5">
                <form>
                    <div className="row mb-3">
                        <div className="col-sm-4 mx-auto">
                            <div>
                                <h4>
                                    <b>Job Title</b>
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-8 mx-auto">
                            <input type="text"
                                className="w-100"
                                defaultValue="Duis non volutpat arcu, eu mollis tellus."
                            ></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-4 mx-auto">
                            <div>
                                <h4>
                                    <b>Job Desription</b>
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-8 mx-auto">
                            <TextArea></TextArea>
                        </div>
                    </div>

                    <div className="text-right">
                        <button className="btn btn-danger btn-lg">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default JobEdit;
