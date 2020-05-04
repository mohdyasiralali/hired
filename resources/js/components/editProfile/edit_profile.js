import React from "react";
import ReactDOM from "react-dom";
import ProfilePicture from './profile_picture';
import SkillsTab from './skills_tab';
import ProfileTab from './profile_tab';
import PortfolioTab from './portfolio_tab';

class EditProfile extends React.Component {
    render() {
        return (
            <div
                className="container mt-5 bg-light p-5 rounded mb-5"
                style={{height:'1100px'}}
            >
                {/* Profile Picture */}
                <ProfilePicture></ProfilePicture>

                <div className="row my-2">
                    <div className="col-lg-12 order-lg-2">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#edit"
                                    data-toggle="tab"
                                    className="nav-link active"
                                >
                                    Edit
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#skills"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href=""
                                    data-target="#portfolio"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content py-4">
                            {/* Tabs */}
                            <ProfileTab></ProfileTab>
                            <SkillsTab></SkillsTab>
                            <PortfolioTab></PortfolioTab>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;

if (document.getElementById("root")) {
    ReactDOM.render(<EditProfile />, document.getElementById("root"));
}
