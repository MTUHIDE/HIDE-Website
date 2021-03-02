import React, { Component }from 'react';
import '../home/Home.css';
// import {Link} from "react-router-dom";

class CurrentProjects extends Component {
  render() {
      return (
          <div>
              <div id="top">
                  <section className="hero" id="currentProjectsHero">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-10 col-md-offset-1">
                                  <div className="hero-content text-center">
                                      <h1 className="h1shaddow">HIDE</h1>
                                      <p className="intro" style={{fontSize: 30}}>Current Projects</p>
                                  </div>
                              </div>
                          </div>
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
                                      visible to those with an MTU email address.<br/><br/>
                                      <b>Currently looking for testers!<br/> Visit <a href="https://huskyhunt.com/"
                                                                                      rel="noopener noreferrer"
                                                                                      target="_blank">https://huskyhunt.com/</a> for
                                          more information.</b></p>
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
                                  <p>React application, primarily focused on website maintenance with some miscellaneous
                                      side projects such as the Winter Wonderhack site. </p>
                              </div>
                              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                  <h5>ArcelorMittal</h5>
                                  <p>A web-based application and database to enhance the management of ArcelorMittal’s
                                      technical service organization based on territories. </p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                                  <h5>Chem Store</h5>
                                  <p>Working with the MTU Chem Store to create a chemical inventory tracking website for
                                      chemicals distributed around campus.</p>
                              </div>
                              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                  <h5>Pillow Talk</h5>
                                  <p>Research project under Dr. Vertanen to build a voice controlled, inflatable pillow
                                      for a man living with ALS. This is a great project for anyone who is interested in
                                      hardware/software interface.</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6 col-sm-12 col-xs-12 leftcol ">
                                  <h5>GVSC: Command Simulator RTS</h5>
                                  <p>A simulation project for the Ground Vehicle Systems Center (GVSC). Development is
                                      in Unreal Engine 4 for both VR (Vive Cosmos Elite) and PC. </p>
                              </div>
                              <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                                  <h5>CCLC Queue</h5>
                                  <p>A Canvas plugin that will be replacing the current system in the Computer Science
                                      Learning Center.</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                                  <h5>LB: Little Brothers</h5>
                                  <p>Little Brothers is a program that helps the elderly travel to doctor's
                                      appointments, small activities, provide meals, help with bills, etc. This website
                                      is being constructed by members of HIDE at MTU, started in 2021.</p>
                              </div>
                              {/*<div className="col-md-6 col-sm-12 col-xs-12 rightcol">*/}
                              {/*<h5>Voting Booth</h5>*/}
                              {/*<p>A collaboration with Undergraduate Student Government to increase student*/}
                              {/*feedback on key campus issues. Designed to be a quick, easy, and efficient*/}
                              {/*way to survey the student population here at Michigan Tech.</p>*/}
                              {/*</div>*/}
                          </div>

                          <br/>
                          <img
                              src=" http://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"
                              style={{height: 150 + 'px'}} alt={"Michigan Technological University"}/>
                      </div>
                  </section>

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
                                  <p>Our general meetings are <strong>Wednesdays from 6-7pm via <a
                                      href="https://us02web.zoom.us/j/87004752696?pwd=cWRzS1RGQ256Q09Qd0hvMlRybUZBUT09">Zoom</a>.
                                  </strong> Prospective
                                      students are encouraged to attend.
                                      For more information, please contact <strong><a
                                          href="mailto:hide-management-l@mtu.edu">hide-management-l@mtu.edu</a></strong>
                                  </p>
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
                                          Copyright © 2021 Humane Interface Design Enterprise</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </footer>
              </div>
          </div>
      );
  }
}

export default CurrentProjects;
