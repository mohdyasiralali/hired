import React from "react";

class Submissions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submissions: []
        };
    }
    componentDidMount() {
        this.axs();
    }
    axs() {
        axios
            .get("/challenge/submissions/get/" + this.props.co_id)
            .then(response => {
                console.log('SUBMISSIONS',response.data);
            });
    }

    render_submissions() {
        if (this.state.submissions.length === 0) {
            return (
                <div className="my-4">
                    <h5 className="text-muted">No Submissions Yet!</h5>
                </div>
            );
        } else {
            return this.state.submissions.map(submission => {
                <p>Ha ha ho ho</p>;
            });
        }
    }

    render() {
        return (
            <section>
                <div className="p-5 bg-light rounded-bottom">
                    <div className="row mb-2"></div>
                    {/* <div className="container mt-5">{this.redner_jobs()}</div> */}
                    <div className="container row mt-5">
                        {this.render_submissions()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Submissions;
