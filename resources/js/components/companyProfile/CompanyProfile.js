import React from "react";
import CompanyIntro from "./CompanyIntro";
class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CompanyIntro
                    co_id={this.props.co_id}
                    name={this.props.name}
                    industry={this.props.industry}
                    headquarter={this.props.headquarter}
                    website={this.props.website}
                    overview={this.props.overview}
                    skills={this.props.skills}
                ></CompanyIntro>
            </div>
        );
    }
}

export default CompanyProfile;
