import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";
import Carousel from "../carrousel/Carousel";

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
                        "/img/currentprojects/cclcqueue1.png",
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
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:zasmalle@mtu.edu">zasmalle@mtu.edu</a></strong>
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
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:bowittru@mtu.edu">bowittru@mtu.edu</a></strong> and
                      <strong><a href="mailto:pdjansse@mtu.edu"> pdjansse@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"gdls"}
                      picturePaths={[
                        "/img/currentprojects/gdls1.jpg",
                        "/img/currentprojects/gdls1.png"
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
                        "/img/currentprojects/gvsc1.png",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="hf">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Human Factors</h3>
                    <p>Team of UX designers working on various projects (CCLC Queue, Chemstore,
                      Pillowtalk, and little brothers).
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Nathan Gentry and Olivia O'Dwyer
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:ndgentry@mtu.edu">ndgentry@mtu.edu</a></strong> and
                        <strong><a href="mailto:obodwyer@mtu.edu"> obodwyer@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"hf"}
                      picturePaths={[
                        "/img/currentprojects/hf.jpg",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color2" id="lb">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">LB: Little Brothers</h3>
                    <p>Little Brothers is a program that aims to build a driver scheduling application to track
                      (in real-time) appointments offered to elderly folks. This application will also serve to
                      generate reports and keep track of logging for the drivers and elders.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Justin Milliman
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:jlmillim@mtu.edu">jlmillim@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"lb"}
                      picturePaths={[
                        "/img/currentprojects/lb1.jpg",
                        "/img/currentprojects/lb2.jpg",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="sls">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">SLS Website</h3>
                    <p>MTU's Sound and Lighting Services has an employee website for keeping track of upcoming events and supply stock. This project focuses on updating that website and adding new features.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Logan Woznak
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:ljwoznak@mtu.edu">ljwoznak@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"sls"}
                      picturePaths={[
                        "/img/currentprojects/sls.png",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color2" id="traversecity">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Traverse City Electric</h3>
                    <p>Traverse City has a new network of electric vehicle charging stations. They would like a website that educates the public on electric vehicles and provides a map of where to find the charging stations.
                      <br/><br/>
                      <strong>Team Lead(s):</strong>Brandon St Louis and Lela Root
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:brstloui@mtu.edu">brstloui@mtu.edu</a></strong> and
                        <strong><a href="mailto:lnroot@mtu.edu"> lnroot@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                      name={"traversecity"}
                      picturePaths={[
                        "/img/currentprojects/tcev1.png",
                        "/img/currentprojects/tcev2.png",
                        "/img/currentprojects/tcev3.png",
                        "/img/currentprojects/tcev4.png",
                      ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="yoopapers">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">YooPapers</h3>
                    <p>YooPapers is an app for assisting in due process serving court papers. The primary users will be the administrators entering locations, and the individuals following GPS directions to the entered locations to serve the papers.
                      <br/><br/>
                      <strong>Team Lead(s):</strong>Owen Cramer and Tim Perr
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:owcramer@mtu.edu">owcramer@mtu.edu</a></strong> and
                      <strong><a href="mailto:tlperr@mtu.edu"> tlperr@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  {/*<Carousel*/}
                  {/*    name={"yoopapers"}*/}
                  {/*    picturePaths={[*/}
                  {/*      "/img/currentprojects/tcev1.png",*/}
                  {/*      "/img/currentprojects/tcev2.png",*/}
                  {/*      "/img/currentprojects/tcev3.png",*/}
                  {/*      "/img/currentprojects/tcev4.png",*/}
                  {/*    ]}*/}
                  {/*/>*/}
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color2" id="cs">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">CS Dept Scheduling App</h3>
                    <p>The CS department is in need of a scheduling application. This application will keep track of class data (such as credits, prerequisites, and scheduling conflicts), as well as faculty data (such as teaching history).
                      <br/><br/>
                      <strong>Team Lead(s):</strong>Andrea Sarabia
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:aesarabi@mtu.edu">aesarabi@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  {/*<Carousel*/}
                  {/*    name={"cs"}*/}
                  {/*    picturePaths={[*/}
                  {/*      "/img/currentprojects/tcev1.png",*/}
                  {/*      "/img/currentprojects/tcev2.png",*/}
                  {/*      "/img/currentprojects/tcev3.png",*/}
                  {/*      "/img/currentprojects/tcev4.png",*/}
                  {/*    ]}*/}
                  {/*/>*/}
                </div>
              </div>
            </div>
          </section>
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

