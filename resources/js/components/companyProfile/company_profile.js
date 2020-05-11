import React from "react";
import CompanyIntro from "./company_intro";
// import CompanyOverview from './company_overview';
// import CompanySkills from './company_skills';
// import CompanyJobs from './company_jobs';
// import CompanyMatching from './company_matching';

class CompanyProfile extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //     co_skills : []
        // }
    }
    // componentDidMount() {
    //     console.log(this.props.co_id);
    //     this.axs();
    // }

    // axs() {
    //     // companies skills
    //     axios.get("/company/skills/" + this.props.co_id).then(response => {
    //         // console.log(response.data)
    //         this.setState({ co_skills: response.data });
    //         // console.log('pst 0 ', this.state.co_skills);
    //     });
    // }
    render() {
    //  console.log( this.props.name,'=====',this.props.skills);
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
                {/* <CompanyOverview></CompanyOverview>
                <CompanySkills></CompanySkills>
                <CompanyJobs></CompanyJobs>
                <CompanyMatching></CompanyMatching> */}
            </div>
        );
    }
}

export default CompanyProfile;

// if (document.getElementById("root")) {
//     ReactDOM.render(<CompanyProfile />, document.getElementById("root"));
// }
