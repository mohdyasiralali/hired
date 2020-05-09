import React from "react";
import ReactDOM from "react-dom";
import JobsHeader from "./components/jobs/header";
import UserProfile from "./components/userProfile/user_profile";
import CompanyProfile from "./components/companyProfile/company_profile";
import EditProfile from "./components/userProfile/editProfile/edit_profile";

const body = document.getElementById("body");
const root = document.getElementById("root");

function axs() {
    //Profile ID
    axios.get("/first_attempt").then(response => {
        console.log(response.data);
        if (response.data.id === 21) {
            body.style =
                "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
            ReactDOM.render(
                <EditProfile first_attempt={true} />,
                document.getElementById("root")
            );
        }
        return response.data;
    });
}

axs();

if (root) {
    ReactDOM.render(<JobsHeader />, document.getElementById("root"));
}

let nav_links = document.getElementById("nav-links");

let li = document.createElement("li");
li.className = "nav-item";
let messaging_btn = document.createElement("button");
messaging_btn.textContent = "Messaging";
messaging_btn.className = "btn btn-primary btn-round mr-2";

let jobs_btn = document.createElement("button");
jobs_btn.textContent = "Jobs";
jobs_btn.className = "btn btn-primary btn-round mr-2";
jobs_btn.addEventListener("click", () => {
    if (root) {
        body.style = "background-color: #e6e9f0";
        ReactDOM.render(<JobsHeader />, document.getElementById("root"));
    }
});

li.appendChild(jobs_btn);
li.appendChild(messaging_btn);
nav_links.appendChild(li);

// ----------------------------------------------

let navbar_options = document.getElementById("nav-dropdown");

let profile_btn = document.createElement("button");
profile_btn.textContent = "View Profile";
profile_btn.className = "dropdown-item";
profile_btn.addEventListener("click", () => {
    if (root) {
        body.style =
            "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
        ReactDOM.render(<UserProfile />, document.getElementById("root"));
    }
});

let co_btn = document.createElement("button");
co_btn.textContent = "Create Company Profile";
co_btn.className = "dropdown-item";
co_btn.addEventListener("click", () => {});

let co_ex = document.createElement("button");
co_ex.textContent = "Corporate";
co_ex.className = "dropdown-item text-primary";
co_ex.addEventListener("click", () => {
    if (root) {
        body.style =
            "background-image: linear-gradient(0deg, #766dff 0%, #88f3ff 100%)";
        ReactDOM.render(<CompanyProfile />, document.getElementById("root"));
    }
});

navbar_options.appendChild(profile_btn);
navbar_options.appendChild(co_btn);
navbar_options.appendChild(co_ex);

// require("./components/companyProfile/company_profile");
// require("./components/jobs/header");
