/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import EditProfile from './components/editProfile/edit_profile'
import UserProfile from './components/userProfile/user_profile'

// if (document.getElementById("root")) {
//     ReactDOM.render(<UserProfile />, document.getElementById("root"));
// }

let navbar_options = document.getElementById("nav-dropdown");

let profile_btn = document.createElement("btn");
profile_btn.textContent = "Profile";
profile_btn.className = "dropdown-item";
profile_btn.addEventListener("click", () => {
    let root = document.getElementById("root")
    let body = document.getElementById("body")
    if (root) {
        body.style = 'background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)'
        ReactDOM.render(<EditProfile />, document.getElementById("root"));
    }
});

let msg_btn = document.createElement("btn");
msg_btn.textContent = "Messaging";
msg_btn.className = "dropdown-item";

let job_btn = document.createElement("btn");
job_btn.textContent = "Post a job";
job_btn.className = "dropdown-item";

navbar_options.appendChild(profile_btn);
navbar_options.appendChild(msg_btn);
navbar_options.appendChild(job_btn);

// require('./components/userProfile/user_profile');
// require("./components/editProfile/edit_profile");

require("./components/companyProfile/company_profile");

