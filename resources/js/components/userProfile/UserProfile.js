import React from "react";
import UserProfileIntro from "./UserProfileIntrol";
import UserProfileBio from "./UserProfileBio";
import UserProfileSkills from "./UserProfileSkills";
// import UserProfilePortfolio from "./user_profile_portfolio";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            skills: []
        };
    }
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios
            .get("/profile/" + this.props.user_id)
            .then(response => {
                // console.log("from user profile", response.data);
                return response.data;
            })
            .then(json => {
                this.setState({ profile: json.profile });
                this.setState({ skills: json.skills });
            });
    }

    render() {
        return (
            <div>
                <UserProfileIntro
                    user_id={this.props.user_id}
                    avatar={this.state.profile.avatar}
                    name={this.state.profile.name}
                    email={this.state.profile.email}
                    bd={this.state.profile.birth_day}
                    profession={this.state.profile.profession}
                    fb={this.state.profile.facebook_profile}
                    linkedin={this.state.profile.linked_profile}
                    bio={this.state.profile.bio}
                    profile_id = {this.state.profile.id}
                    skills={this.state.skills}
                ></UserProfileIntro>
            </div>
        );
    }
}

export default UserProfile;
