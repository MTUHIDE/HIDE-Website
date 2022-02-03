import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";
import Carousel from "../carrousel/Carousel";
import {Link} from "react-router-dom";

export default class PastProjects extends React.Component {

    render() {
        return (
            <>
                <div id="top-current">
                    <section className="hero" id="currentProjectsHero">
                        <div className="container">
                            <div className="row">
                                <div className="blur"/>
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="hero-content text-center">
                                        <h1 className="h1shaddow">HIDE</h1>
                                        <p className="intro" style={{fontSize: 30}}>Past Projects</p>
                                    </div>
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
                    <div className="row justify-content-center" id="pastprojects">
                        <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                            <h5>See the exciting projects we are working on right now!</h5>
                            <Link to="/currentprojects">
                                <button type="button" className="btn btn-lg btn-block" id={"learn-more-light"}>
                                    <h5>Current Projects</h5>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <Contact/>

                </div>
            </>
        );
    }
}

