import React from "react";
import ReactDOM from "react-dom";
import UserProfileIntro from './user_profile_intro';
import UserProfileBio from './user_profile_bio';
import UserProfileSkills from './user_profile_skills';
import UserProfilePortfolio from './user_profile_portfolio';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <UserProfileIntro></UserProfileIntro>
                <UserProfileBio></UserProfileBio>
                <UserProfileSkills></UserProfileSkills>
                <UserProfilePortfolio></UserProfilePortfolio>
            </div>
        );
    }
}

export default UserProfile;

if (document.getElementById("root")) {
    ReactDOM.render(<UserProfile />, document.getElementById("root"));
}