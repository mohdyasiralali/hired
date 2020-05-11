import React from "react";

class CompanyOverview extends React.Component {
    render() {
        return (
            <section className="my-5">
                <div className="container p-5 bg-light rounded">
                    <div className="row">
                        <div className="col-sm-4">
                            <div>
                                <h3 className="text-primary">
                                    <b>Overview</b>
                                </h3>
                                <h6>
                                    <strong>ABOUT THE COMPANY</strong>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <p>{this.props.overview}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CompanyOverview;
