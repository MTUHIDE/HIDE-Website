import React from 'react';
import './Home.css';
import Management from "./Management";

function NavigationHeader() {
    function openMenu() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div>
            <div>
                <section className="navigation fixed back">
                    <header className="headerStyle" />
                </section>
            </div>
            <div className="container navContainer">
                <div className="topnav" id="myTopnav">
                    <a className="logoNav" href="#top"><img src={window.location.origin + '/HIDE_Logo.png'} alt="HIDE logo" /></a>
                    <a className="navLink" href="#about">About</a>
                    <a className="navLink" href="#projects">Projects</a>
                    <a className="navLink" href="#management">Management</a>
                    <a className="navLink" href="#contact">Contact</a>

                    <a className="icon navLinkIcon" onClick={openMenu}>&#9776;</a>
                </div>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div>
            <div id="top">
                <section className="hero">
                    <NavigationHeader />
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
                                <h5>HuskyHunt</h5>
                                <p>The HuskyHunt project is designed to allow Michigan Tech students and faculty to
                                    sell/trade their stuff in a secure manner. Product listings are only
                                    visible to those with an MTU email address.<br /><br />
                                <b>Currently looking for testers!<br /> Visit <a href="https://huskyhunt.com/" rel="noopener noreferrer" target="_blank">https://huskyhunt.com/</a> for more information.</b></p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                <h5>Voting Booth</h5>
                                <p>A collaboration with Undergraduate Student Government to increase student
                                    feedback on key campus issues. Designed to be a quick, easy, and efficient
                                    way to survey the student population here at Michigan Tech.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                                <h5>HIDE Website</h5>
                                <p>React application, primarily focused on website maintenance with some miscellaneous side projects such as the Winter Wonderhack site. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                <h5>ArcelorMittal</h5>
                                <p>A web-based application and database to enhance the management of ArcelorMittal’s technical service organization based on territories. </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                                <h5>Chem Store</h5>
                                <p>New Project working with the MTU Chem Store to create a chemical inventory tracking website for chemicals distributed around campus.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                <h5>Pillow Talk</h5>
                                <p>Research project under Dr. Vertanen to build a voice controlled, inflatable pillow for a man living with ALS. This is a great project for anyone who is interested in hardware/software interface.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 leftcol ">
                                <h5>GVSC: Command Simulator RTS</h5>
                                <p>A simulation project for the Ground Vehicle Systems Center (GVSC). Development is in Unreal Engine 4 for both VR (Vive Cosmos Elite) and PC. </p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                <h5>CoCo Temp</h5>
                                <p>A web application with a focus on collecting microclimate data from citizen scientists.</p>
                            </div>
                        </div>

                        <br />
                        <img src=" http://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"
                             style={{height:150 + 'px'}} alt={"Michigan Technological University"}/>
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
                                <p>Our general meetings are <strong>Wednesdays from 6-7pm via <a href="https://www.google.com/url?q=https://us02web.zoom.us/j/81124480955?pwd%3DOExZenRZRDNWUmU2b1ZiSVVveDZjZz09&sa=D&source=calendar&ust=1601935779454000&usg=AOvVaw13oBUtkqM34u5e3MBYOcoL">Zoom</a>. </strong> Prospective
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
