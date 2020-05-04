import React from "react";
import ReactDOM from "react-dom";
import ProfilePicture from './profile_picture';
import SkillsTab from './skills_tab';
import ProfileTab from './profile_tab';
import PortfolioTab from './portfolio_tab';
import axios from 'axios';

class EditProfile extends React.Component {
    constructor(props){
        super(props)

        this.axs = this.axs.bind(this);
    } 

    componentDidMount(){
        this.axs();
    }

    axs(){
        //Profile ID
        axios
        .get("/profile/21" + this.props.team_id)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .then(json => {
            // this.setState({ tasks: json });
        });
    }

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

// if (document.getElementById("root")) {
//     ReactDOM.render(<EditProfile />, document.getElementById("root"));
// }
