import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";
import Carousel from "../carrousel/Carousel";
import {Link} from "react-router-dom";

export default class CurrentProjects extends React.Component {

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
                    <p className="intro" style={{fontSize: 30}}>Current Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="cclcqueue">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">CCLC Queue</h3>
                    <p>A web application built into Canvas which will provide a question/answer queue for the CCLC.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Tyler Zetty
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:tjzetty@mtu.edu">tjzetty@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"cclcqueue"}
                      picturePaths={[
                        "/img/currentprojects/cclcqueue_screenshot1.png",
                        "/img/currentprojects/cclcqueue_screenshot2.png"
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color2" id="chemstore">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Chem Store</h3>
                    <p>A web application that keeps track of the inventory of chemicals on campus.
                      Users can search for chemicals, log transfers, request chemicals, and more!
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Zane Smalley
                      {/*<br/><br/>Want to learn more?*/}
                      {/*<br/>Contact: <strong><a*/}
                      {/*  href="mailto:bwpost@mtu.edu">bwpost@mtu.edu</a></strong>*/}
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                    name={"chemstore"}
                    picturePaths={[
                      "/img/currentprojects/chemstore_screenshot.png"
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="gdls">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">GDLS: Web Scraping and Image Labeling</h3>
                    <p>Sponsored by General Dynamics Land Systems (GDLS), this is a project based around developing
                      tools for web scraping and image labeling.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Benjamin Wittrup, Patrick Janssen
                      {/*<br/><br/>Want to learn more?*/}
                      {/*<br/>Contact: <strong><a*/}
                      {/*    href="mailto:jarabide@mtu.edu">jarabide@mtu.edu</a></strong> and*/}
                      {/*<strong><a href="mailto:emmuller@mtu.edu"> emmuller@mtu.edu</a></strong>*/}
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"gdls"}
                      picturePaths={[
                        "/img/currentprojects/gdls1.jpg"
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color2" id="gvsc">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">GVSC: Command Simulator RTS</h3>
                    <p>A simulation project for the Ground Vehicle Systems Center (GVSC).
                      A simple real-time strategy game (RTS) with separate different HUD options to test the
                      effectiveness of VR HUD’s design and user ergonomics.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Joe Wood
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:jodwood@mtu.edu">jodwood@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"gvsc"}
                      picturePaths={[
                        "/img/currentprojects/gvsc_screenshot.png",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="lb">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">LB: Little Brothers</h3>
                    <p>Little Brothers is a program that helps the elderly travel to doctor's
                      appointments, small activities, provide meals, help with bills, etc.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Tom Berg
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:tomberg@mtu.edu">tomberg@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"lb"}
                      picturePaths={[
                        "/img/currentprojects/lb_screenshot.png"
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          {/*<section className="features-extra section-padding color1" id="hidewebsite">*/}
          {/*  <div className="container sm-padding">*/}
          {/*    <div className="row flex-vertically">*/}
          {/*      <div className="col-md-5 col-sm-12">*/}
          {/*        <div className="feature-list">*/}
          {/*          <h3 className="about">Maintenance Team</h3>*/}
          {/*          <p><strong><a href="https://huskyhunt.com/"*/}
          {/*               rel="noopener noreferrer"*/}
          {/*                                 target="_blank">HuskyHunt</a>:</strong> Buying/Selling/Carpooling site for the MTU campus. We launched in Spring 2021. Mostly*/}
          {/*            written in Django.*/}
          {/*            <br/><br/>*/}
          {/*            <strong>HIDE Website:</strong> The website you are on right now!*/}
          {/*            <br/><br/>*/}
          {/*            <strong>Team Lead(s):</strong> Charles Vidro*/}
          {/*            <br/><br/>Want to learn more?*/}
          {/*            <br/>Contact: <strong><a*/}
          {/*              href="mailto:cjvidro@mtu.edu">cjvidro@mtu.edu</a></strong>*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="col-md-7 col-sm-12 center">*/}
          {/*        <Carousel*/}
          {/*          name={"hidewebsite"}*/}
          {/*          picturePaths={[*/}
          {/*            "/img/currentprojects/hidewebsite_screenshot.png",*/}
          {/*            "/img/currentprojects/huskyhunt_screenshot.png",*/}
          {/*            "/img/currentprojects/arcelormittal_screenshot.jpg"*/}
          {/*          ]}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}
          {/*<div className="row justify-content-center">*/}
          {/*    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">*/}
          {/*      <br/><h5>See what we have worked on in the past!</h5><br/>*/}
          {/*      <Link to="/pastprojects">*/}
          {/*        <button type="button" className="btn" id={"learn-more-light"}>*/}
          {/*          <h5>Past Projects</h5>*/}
          {/*        </button>*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <Contact/>

        </div>
      </>
    );
  }
}

