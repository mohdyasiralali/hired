import React from "react";
import ReactDOM from "react-dom";
import CompanyIntro from './company_intro';
// import CompanyOverview from './company_overview';
// import CompanySkills from './company_skills';
// import CompanyJobs from './company_jobs';
// import CompanyMatching from './company_matching';

class CompanyProfile extends React.Component {
    render() {
        return (
            <div>
                <CompanyIntro></CompanyIntro>
                {/* <CompanyOverview></CompanyOverview>
                <CompanySkills></CompanySkills>
                <CompanyJobs></CompanyJobs>
                <CompanyMatching></CompanyMatching> */}
            </div>
        );
    }
}

export default CompanyProfile;

if (document.getElementById("root")) {
    ReactDOM.render(<CompanyProfile />, document.getElementById("root"));
}
