import React from "react";
import TextArea from "./text-area";

class AddJobModal extends React.Component {
    render() {
        return (
            // <!-- Modal -->
            <div
                className="modal fade"
                id="newJob"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="newJobModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="newJobModalLabel">
                                <b>Add New Job</b>
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        placeholder="Job Title"
                                        className="form-control"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                    >
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <TextArea></TextArea>
                                </div>
                                <button className="btn btn-primary btn-round">
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddJobModal;
