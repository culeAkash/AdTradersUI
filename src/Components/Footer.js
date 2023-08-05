import React from 'react'
import { Link } from 'react-router-dom'
import '../Static/Styles/Footer.css'

export default function Footer() {
    return (
        <div className="footer">

            <footer className="page-footer font-small blue pt-4">

                <div className="container-fluid text-center text-md-left">

                    <div className="row">

                        <div className="col-md-6 mt-md-0 mt-3 mb-2">

                            <h5 className="text-uppercase">adtraders.com</h5>

                        </div>




                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Connect With us</h5>




                            <ul className="list-unstyled">

                                <li>

                                    <i className="youtube icon"></i>

                                    YouTube

                                </li>

                                <li>

                                    <i className="instagram icon"></i>

                                    Instagram



                                </li>

                                <li>

                                    <i className="linkedin icon"></i>

                                    LinkedIn

                                </li>



                            </ul>

                        </div>




                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Follow us here</h5>




                            <ul className="list-unstyled">

                                <li>

                                    <i className="facebook icon"></i>

                                    Facebook

                                </li>

                                <li>

                                    <i className="twitter icon"></i>

                                    Twitter

                                </li>

                                <li>

                                    <i className="google plus icon"></i>

                                    Google Plus

                                </li>



                            </ul>

                        </div>

                    </div>

                </div>

                <div className="footer-copyright text-center py-3">

                    © 2023 Copyright:

                    <Link to_="/" style={{ textDecoration: "none", color: "blue", fontWeight: "700", fontSize: "22px" }}>

                        {" "}

                        adtraders.com

                    </Link>

                </div>

            </footer>

        </div>
    )
}
