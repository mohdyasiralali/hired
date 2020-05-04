import React from "react";

class CompanyIntro extends React.Component {
    render() {
        return (
            <section className="intro-section mb-5">
                <div className="container">
                    <div className="top-right">
                        <a href="#" className="btn btn-danger mb-5">
                            Hire Me!
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-lg-5">
                            <div className="intro rounded mb-5">
                                <div className="profile-img border border-light border-3">
                                    <img
                                        className="w-100"
                                        src="/storage/images/co-logo.jpg"
                                        alt=""
                                    ></img>
                                </div>
                                <h2 className="mt-3">
                                    <b>Coroporate</b>
                                </h2>
                                <ul className="list-group my-4 list-unstyled">
                                    <li>
                                        <b>Industry: </b>Software
                                    </li>
                                    <li>
                                        <b>Headquarters: </b>Beirut, Lebanon
                                    </li>
                                    <li>
                                        <b>Website: </b>
                                        https://www.coroporate.com
                                    </li>
                                    <li>
                                        <b>Founded:</b>1987
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default CompanyIntro;
