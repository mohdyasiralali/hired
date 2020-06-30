import React from "react";
import CompanyOverview from "./companyProfile/CompanyOverview";
import CompanySkills from "./companyProfile/CompanySkills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Companies extends React.Component {
    constructor() {
        super();

        this.state = {
            companies: [],
            current_co: [],
            location: ""
        };
    }
    // ===================================================================== GET ALL COMPANIES
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/api/companies/get/all").then(response => {
            this.setState({
                companies: response.data,
                current_co: response.data[0]
            });
        });
    }
    // ===================================================================== DISPLAY COMPANY DETAILS | MAIN DISPLAY
    displayCompany() {
        if (this.state.companies.length === 0) {
            return (
                <div className="p-5">
                    <h4 className="text-muted">
                        <i className="fas fa-times mr-3"></i>No result found
                    </h4>
                </div>
            );
        }
        let src =
            "/storage/images/companies/" + this.state.current_co.company.avatar;
        return (
            <div>
                <div className="mb-3 p-3 text-center bg-light rounded">
                    <div className="row">
                        <div className="col-md-4 ml-auto">
                            <div className="profile-img text-center">
                                <img
                                    className="w-100 rounded-circle"
                                    src={src}
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="col-md-4 mr-auto">
                            <h2 className="mt-3">
                                <b>{this.state.current_co.company.name}</b>
                            </h2>
                            <ul className="list-group my-4 list-unstyled">
                                <li>
                                    <b>Industry: </b>
                                    {this.state.current_co.company.industry}
                                </li>
                                <li>
                                    <b>Headquarters: </b>
                                    {this.state.current_co.company.headquarter}
                                </li>
                                <li>
                                    <b>Website: </b>
                                    {this.state.current_co.company.website}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <CompanyOverview
                    overview={this.state.current_co.company.overview}
                ></CompanyOverview>
                <CompanySkills
                    skills={this.state.current_co.skills}
                ></CompanySkills>
            </div>
        );
    }
    // ===================================================================== CHANGE MAIN DISPLAY
    onClickCompanyCard(e, company) {
        this.setState({ current_co: company });
    }

    // ===================================================================== SEARCH USING LOCATION
    onChangeLocation(e) {
        if (e.target.value !== "") {
            axios.get("/api/companies/get/" + e.target.value).then(response => {
                this.setState({
                    companies: response.data,
                    current_co: response.data[0]
                });
            });
        } else {
            this.axs();
        }
    }
    // ===================================================================== RENDER COMPANIES CARDS
    renderCompanies() {
        if (this.state.companies.length === 0) {
            return (
                <div className="p-5">
                    <h4 className="text-muted">
                        <i className="fas fa-times mr-3"></i>No result found
                    </h4>
                </div>
            );
        }
        return this.state.companies.map(element => {
            let src = "/storage/images/companies/" + element.company.avatar;
            return (
                <div
                    className="col-md-4 mb-3 link-div--onhover"
                    key={element.company.id}
                >
                    <div
                        className="card bg-light rounded pb-2"
                        onClick={e => {
                            this.onClickCompanyCard(e, element);
                        }}
                        style={{ minHeight: "250px" }}
                    >
                        <div className="px-2 my-2">
                            <div className="row p-2 text-center justify-content-center">
                                <div>
                                    <img
                                        src={src}
                                        alt="avatar"
                                        className="w-50 rounded-circle mb-2"
                                    ></img>
                                </div>

                                <div className="mt-3">
                                    <h4 className="">
                                        <strong>{element.company.name}</strong>
                                    </h4>

                                    <h6 className="text-muted">
                                        <i className="fas fa-map-marker-alt mr-3"></i>{" "}
                                        {element.company.headquarter}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    // ===================================================================== MAIN RENDER
    render() {
        return (
            <section className="my-5">
                <div className="container-fluid">
                    <div className="px-3 text-center">
                        <h1 className="text-white display-4">
                            Companies using
                            <b>
                                <span
                                    style={{
                                        fontFamily: "Roboto"
                                    }}
                                >
                                    {" "}
                                    Hired
                                </span>
                            </b>
                        </h1>
                    </div>

                    <div className="row p-5">
                        <div className="col-md-6 bg-dark rounded p-3">
                            <div className="bg-light d-inline search-field py-2 px-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <input
                                    type="text"
                                    className="py-1 px-3 w-50 field-icon search-field mx-2"
                                    onChange={this.onChangeLocation.bind(this)}
                                ></input>
                            </div>
                            <div className="row mt-5">
                                {this.renderCompanies()}
                            </div>
                        </div>
                        <div className="col-md-6">{this.displayCompany()}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Companies;
