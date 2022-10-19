import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";
import Carousel from "../carrousel/Carousel";

export default class PastProjects extends React.Component {

    render() {
        return (
            <>
                <div id="top-current">
                    <section className="hero" id="currentProjectsHero">
                        <div className="container">
                            <div className="row">
                                <div className="blur">
                                    <div className="hero-content text-center">
                                        <h1 className="h1shaddow">HIDE</h1>
                                        <p className="intro" style={{fontSize: 30}}>Past Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color1" id="pillowtalk">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">Pillow Talk</h3>
                                        <p>Research project under Dr. Vertanen to build a voice controlled, inflatable pillow
                                            for a man living with ALS. This is a great project for anyone who is interested in
                                            hardware/software interface.
                                            {/*<br/><br/>*/}
                                            {/*<strong>Team Lead(s):</strong> Ian Lawrie*/}
                                            {/*<br/><br/>Want to learn more?*/}
                                            {/*<br/>Contact: <strong><a*/}
                                            {/*    href="mailto:iplawrie@mtu.edu">iplawrie@mtu.edu</a></strong>*/}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"pillowtalk"}
                                        picturePaths={[
                                            "/img/currentprojects/pillowtalk_screenshot1.png",
                                            "/img/currentprojects/pillowtalk_screenshot2.png"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color2" id="health_resource_hub">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">Health Resource Hub</h3>
                                        <p>Provides information about important community resources such as food, housing, transit, health, education, and more. Collaborating with IT Oxygen enterprise.
                                            {/*<br/><br/>*/}
                                            {/*<strong>Team Lead(s):</strong> Abby Myers*/}
                                            {/*<br/><br/>Want to learn more?*/}
                                            {/*<br/>Contact: <strong><a*/}
                                            {/*    href="mailto:abigailm@mtu.edu">abigailm@mtu.edu</a></strong>*/}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"healthResourceHub"}
                                        picturePaths={[
                                            "/img/code_background2.jpeg"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color1" id="huskyhunt">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">HuskyHunt</h3>
                                        <p>Buying/Selling/Carpooling site for the MTU campus. We launched in Spring 2021. Mostly
                                            written in Django.
                                            <br/><br/>
                                            Visit the site: <strong><a href="https://huskyhunt.com/"
                                                                       rel="noopener noreferrer"
                                                                       target="_blank">huskyhunt.com</a></strong>
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"huskyhunt"}
                                        picturePaths={[
                                            "/img/pastprojects/huskyhunt_screenshot.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color2" id="votingbooth">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">Voting Booth</h3>
                                        <p>A collaboration with Undergraduate Student Government to increase student
                                            feedback on key campus issues. Designed to be a quick, easy, and efficient
                                            way to survey the student population here at Michigan Tech using RFID readers.
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"votingbooth"}
                                        picturePaths={[
                                            "/img/pastprojects/Voting Booth Logo.jpg",
                                            "/img/pastprojects/votingbooth1.png",
                                            "/img/pastprojects/votingbooth2.png",
                                            "/img/pastprojects/votingbooth3.png",
                                            "/img/pastprojects/votingbooth4.png",
                                            "/img/pastprojects/votingbooth5.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color1" id="arcelormittal">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">ArcelorMittal/Cleveland Cliffs TSE Mapping Project</h3>
                                        <p>This project is a geolocation visualization web-based application and database
                                            to enhance the management of ArcelorMittal/Cleveland Cliffs' technical service organization.
                                            <br/>The envisioned system includes a map showing customers by locations,
                                            and the technical services engineers (TSEs) assigned to each customer.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"arcelormittal"}
                                        picturePaths={[
                                            "/img/pastprojects/arcelormittal1.png",
                                            "/img/pastprojects/arcelormittal2.png",
                                            "/img/pastprojects/arcelormittal3.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color2" id="cocotemp">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">CoCo-Temp</h3>
                                        <p>Coco-Temp is a citizen science project focused on finding the links
                                            that buildings, watersheds or other parts of the environment have
                                            on the microclimate temperature.
                                            <br/>This includes a web application that will be used by users to
                                            upload their temperature data and be used to compare with other users
                                            temperature data, as well as a desktop application to communicate between
                                            the hardware device and the web app.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"cocotemp"}
                                        picturePaths={[
                                            "/img/pastprojects/cocotemp1.png",
                                            "/img/pastprojects/cocotemp2.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color1" id="timeslot">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">TimeSlot</h3>
                                        <p>Online appointment scheduling and management for learning centers across campus.
                                            Currently in beta testing at the Math Learning Center and Multiliteracy Center.
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"timeslot"}
                                        picturePaths={[
                                            "/img/pastprojects/timeslot1.png",
                                            "/img/pastprojects/timeslot2.png",
                                            "/img/pastprojects/timeslot3.png",
                                            "/img/pastprojects/timeslot4.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="features-extra section-padding color2" id="tempist">
                        <div className="container sm-padding">
                            <div className="row flex-vertically">
                                <div className="col-md-5 col-sm-12">
                                    <div className="feature-list">
                                        <h3 className="about">Tempi.st</h3>
                                        <p>Sponsored by GVSC, this project aims to utilize Raspberry Pis to collect weather data
                                            in real-time for its given location and to send the collected data to a user an a device
                                            such as a phone, computer, or tablet in the form of an alert or by the user opening a
                                            web page.
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 center">
                                    <Carousel
                                        name={"tempist"}
                                        picturePaths={[
                                            "/img/pastprojects/tempist1.png",
                                            "/img/pastprojects/tempist2.png",
                                            "/img/pastprojects/tempist3.png",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*<div className="row justify-content-center">*/}
                    {/*    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">*/}
                    {/*        <br/><h5>See the exciting projects we are working on right now!</h5><br/>*/}
                    {/*        <Link to="/currentprojects">*/}
                    {/*            <button type="button" className="btn" id={"learn-more-light"}>*/}
                    {/*                <h5>Current Projects</h5>*/}
                    {/*            </button>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <Contact/>

                </div>
            </>
        );
    }
}

