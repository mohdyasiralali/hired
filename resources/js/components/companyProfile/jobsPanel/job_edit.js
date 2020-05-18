import React from "react";
import TextArea from "./text-area";

class JobEdit extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title:"",
            description:""
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmitSave = this.onSubmitSave.bind(this);


    }
    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }
    onChangeDescription(jd) {
        this.setState({ description: jd });
    }
    onSubmitSave(e){
        e.preventDefault();
        // console.log(this.props.job.id ,'======' , this.state)
        let newjob = {
            'title': this.state.title === "" ? this.props.job.title : this.state.title,
            'description': this.state.description === "" ? this.props.job.description : this.state.description,
            'job_id' :  this.props.job.id
        }
        this.props.updateJob(newjob, this.props.job);
    }
    render() {
        return (
            <div className="container p-5 mb-5">
                <form onSubmit={this.onSubmitSave}>
                    <div className="row mb-3">
                        <div className="col-sm-4 mx-auto">
                            <div>
                                <h4>
                                    <b>Job Title</b>
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-8 mx-auto">
                            <input
                                type="text"
                                className="w-100"
                                defaultValue={this.props.job.title}
                                onChange = {this.onChangeTitle}
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
                            <TextArea
                                description={this.props.job.description}
                                getContent={this.onChangeDescription.bind(this)}
                            ></TextArea>
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
