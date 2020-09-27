import React from 'react';
import './Home.css';
import Management from "./Management";

function Home() {
    return (
        <div>
            <div id="top">
                <section className="hero">
                    <section className="navigation fixed">
                        <header className="headerStyle">
                            <div className="header-content">
                                <div className="logo">
                                    <a href="#top"><img src={window.location.origin + '/HIDE_Logo.png'} alt="HIDE logo" /></a>
                                </div>
                                <div className="header-nav">
                                    <nav>
                                        <ul className="primary-nav">
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#projects">Projects</a></li>
                                            <li><a href="#management">Management</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        </header>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="hero-content text-center">
                                    <h1 className="h1shaddow">HIDE</h1>
                                    <p className="intro">Humane Interface Design Enterprise</p>
                                    <a href="#about" className="btn btn-outline-primary learn-more">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features-extra section-padding" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="feature-list">
                                    <h3 className="about">About Us</h3>
                                    <p>The <strong>Humane Interface Design Enterprise</strong> is a student-run
                                        organization
                                        focused on <strong>software development and usability research. </strong>
                                        Our primary goal is to give our members a headstart in their careers by
                                        immersing
                                        them in a <strong>collaborative environment</strong> where they can gain real
                                        world
                                        work experience.</p>
                                    <p><strong>HIDE</strong> alumni are some of the most distinguished Michigan Tech
                                        students. <strong>Google, Handshake, and Target</strong> are just a few of the
                                        many
                                        places where
                                        members have been able to secure jobs.
                                    </p>
                                    <p>We have worked on a variety of different projects in the past. From comparing
                                        cognitive load while driving with <strong>Google Glass and Android</strong>, to
                                        usability testing a prototype of <strong>Chrysler's U-Connect system</strong>,
                                        to
                                        building a crowd-sourced music selection Web App for <strong>Winter
                                            Carnival</strong>. HIDE
                                        members have the opportunity to work on unique projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="macbook-wrap wp3 animated fadeInRight" />
                    <div className="responsive-feature-img">
                        <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/8/80/User-experience-diagram.png"}
                        alt="responsive devices" />
                    </div>
                </section>

                <section className="blog-intro section-padding" id="projects">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Current Projects</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                                <h5>Survey Application</h5>
                                <p>A collaboration with USG and Career services to increase feedback in various
                                    applications
                                    (i.e. on campus, career fair). Easy to use custom interface to create, distribute,
                                    and
                                    analyze surveys.</p>
                                <img
                                    src=" http://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"
                                    style={{height:150 + 'px'}} alt={"Michigan Technological University"}/>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol ">
                                <h5>MTMC Scheduling Application</h5>
                                <p>A web application for viewing / creating availability, services, users, and
                                    appointments
                                    for Michigan Tech Learning Centers. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                <h5>CoCo Temp</h5>
                                <p>Citizen Science Data collection system for micro-climate, research scientists
                                    complete
                                    data logging system whose feature set focuses on analysis of micro climate temp
                                    data.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <Management/>

                <section className="sign-up section-padding text-center" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <h3>Contact</h3>
                                {/*<p>Our general meetings are <strong>Wednesdays from 6-7pm in Rekhi*/}
                                    {/*214.</strong> Prospective*/}
                                    {/*students are encouraged to attend.*/}
                                    {/*For more information, please contact <strong><a*/}
                                        {/*href="mailto:hide-management-l@mtu.edu">hide-management-l@mtu.edu</a></strong>*/}
                                {/*</p>*/}
                                <p>Our general meetings are <strong>Wednesdays from 6-7pm via Zoom. </strong> Prospective
                                    students are encouraged to attend.
                                    For more information, please contact <strong><a
                                        href="mailto:hide-management-l@mtu.edu">hide-management-l@mtu.edu</a></strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="to-top">
                    <div className="container">
                        <div className="row">
                            <div className="to-top-wrap">
                                <a href="#top" className="top"><i className="fa fa-angle-up"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer-links">
                                    <p>
                                        Copyright © 2020 Humane Interface Design Enterprise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
);
}

export default Home;
