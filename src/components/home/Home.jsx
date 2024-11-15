import React from 'react';
import './Home.css';
import Management from "./Management";
import Faq from "./Faq"
import Contact from "../Contact/Contact";
import ProjectSummaries from "./ProjectSummaries";
import UpcomingEvents from "../events/Events";

export default class Home extends React.Component {
  render() {
      return (
          <div>
              {/*{renderRedirect()}*/}
              <div id="top">
                  <section className="hero">
                      <div className="container">
                          <div className="row">
                              <div className="blur2">
                                  <p className="alertText"><strong>Come to our recruitment meeting October 9th from 6-7pm in Fisher 139! </strong></p>
                              </div>
                              <div className="blur">
                                      <div className="hero-content">
                                          <h1 className="h1shaddow">HIDE</h1>
                                          <p className="subtitle"><strong>Humane Interface Design Enterprise</strong></p>
                                          <p className="subtitle2">Student Enterprise at <a href="https://www.mtu.edu/" target="blank">Michigan Technological University</a></p>
                                          <p><a href="#about" className="btn" id="learn-more">Learn more</a></p>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className="features-extra section-padding" id="about">
                      <div className="container">
                          {/*<div className="row">*/}
                          {/*    <div className="col-md-12">*/}
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
                                          cognitive load while driving with <strong>Google Glass and Android</strong>,
                                          to
                                          usability testing a prototype of <strong>Chrysler's U-Connect system</strong>,
                                          to
                                          building a crowd-sourced music selection Web App for <strong>Winter
                                              Carnival</strong>. HIDE
                                          members have the opportunity to work on unique projects.
                                      </p>
                                  </div>
                          {/*    </div>*/}
                          {/*</div>*/}
                      </div>

                      <div className="container">
                          {/*<Carousel*/}
                          {/*    className="carousel"*/}
                          {/*    name={"home"}*/}
                          {/*    picturePaths={[*/}
                          {/*        "/img/home/group_photo.jpg",*/}
                          {/*        "/img/home/group_photo_wide.jpg"*/}
                          {/*    ]}*/}
                          {/*/>*/}
                          <img src={"/img/home/HIDE_Pic_2024.JPG"} alt=""/>
                      </div>
                      {/*<div className="macbook-wrap wp3 animated fadeInRight"/>*/}
                      {/*<div className="responsive-feature-img">*/}
                      {/*    <img*/}
                      {/*         // src={"https://upload.wikimedia.org/wikipedia/commons/8/80/User-experience-diagram.png"}*/}
                      {/*        src={"/img/hide_groupphoto.png"}*/}
                      {/*        alt="responsive devices"/>*/}
                      {/*</div>*/}
                  </section>

                  <UpcomingEvents/>
                  <ProjectSummaries/>
                  <Management/>
                  <Faq/>
                  <Contact/>

                  <section className="to-top">
                      <div className="container">
                          <div className="row">
                              <div className="to-top-wrap">
                                  <a href="/#top" className="top"><i className="fa fa-angle-up"></i></a>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
      );
  }
}
