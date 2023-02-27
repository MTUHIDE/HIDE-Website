import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";
import CurrentProject from "./CurrentProject";

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
          <CurrentProject isDark={false}
                          title={"CCLC Queue"}
                          id={"cclcqueue"}
                          description={"A web application built into Canvas which will provide a question/answer queue for the CCLC."}
                          name={"Jeremiah Kollodge"}
                          email={"jtkollod@mtu.edu"}
                          pictures={[
                              "/img/currentprojects/cclcqueue1.png",
                          ]}
          />
          <CurrentProject isDark={true}
                          title={"Chem Store"}
                          id={"chemstore"}
                          description={"A web application that keeps track of the inventory of chemicals on campus.\n" +
                          "Users can search for chemicals, log transfers, request chemicals, and more!"}
                          name={"Zane Smalley"}
                          email={"zasmalle@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/chemstore_screenshot.png",
                          ]}
          />
          <CurrentProject isDark={false}
                          title={"CS Dept Scheduling App"}
                          id={"csdept"}
                          description={"A scheduling application for the CS Department that will keep track of class " +
                          "data (such as credits, prerequisites, and scheduling conflicts), as well as faculty data " +
                          "(such as teaching history)."}
                          name={"Dee Paulson"}
                          email={"dcpaulso@mtu.edu"}
                          pictures={[]}
          />
          <CurrentProject isDark={true}
                          title={"GDLS"}
                          id={"gdls"}
                          description={"Sponsored by General Dynamics Land Systems (GDLS), this is a project based " +
                          "around developing tools for web scraping and image labeling."}
                          name={"Patrick Janssen"}
                          email={"pdjansse@mtu.edu"}
                          pictures={["/img/currentprojects/gdls1.jpg",
                            "/img/currentprojects/gdls1.png"]}
          />
          <CurrentProject isDark={false}
                          title={"GVSC"}
                          id={"gvsc"}
                          description={"A simulation project for the Ground Vehicle Systems Center (GVSC). A simple " +
                          "real-time strategy game (RTS) with separate different HUD options to test the effectiveness " +
                          "of VR HUD’s design and user ergonomics."}
                          name={"Jerry Jones"}
                          email={"jerryjon@mtu.edu"}
                          pictures={[
                              "/img/currentprojects/gvsc1.png",
                          ]}
          />
          <CurrentProject isDark={true}
                          title={"Human Factors Team"}
                          id={"hf"}
                          description={"This team focuses on UI/UX-centered design for HIDE's interface projects " +
                          "and collaboration with other enterprises."}
                          name={"Olivia O'Dwyer"}
                          email={"obodwyer@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/hf.jpg",
                          ]}
          />
          <CurrentProject isDark={false}
                          title={"Little Brothers"}
                          id={"lb"}
                          description={"A web application designed to streamline the medical transportation services " +
                          "that LBFE offers free-of-charge to elderly Houghton and Keweenaw Counties residents age 60+."}
                          name={"Debbie Brink and Sid Regmi"}
                          email={"dfbrink@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/lb1.jpg",
                            "/img/currentprojects/lb2.jpg",
                          ]}
          />
          <CurrentProject isDark={true}
                          title={"SLS Website"}
                          id={"sls"}
                          description={"MTU's Sound and Lighting Services has an employee website for keeping track of " +
                          "upcoming events and supply stock. This project focuses on updating that website and adding " +
                          "new features."}
                          name={"Logan Woznak"}
                          email={"ljwoznak@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/sls.png",
                          ]}
          />
          <CurrentProject isDark={false}
                          title={"Traverse City Electric Vehicles"}
                          id={"tcev"}
                          description={"A website for Traverse City’s new network of electric vehicle infrastructure. " +
                          "It displays EV info & resources, alongside a map of charging stations."}
                          name={"Brandon St. Louis and Lela Root"}
                          email={"brstloui@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/tcev1.png",
                            "/img/currentprojects/tcev2.png",
                            "/img/currentprojects/tcev3.png",
                            "/img/currentprojects/tcev4.png",
                          ]}
          />
          <CurrentProject isDark={true}
                          title={"YooPapers"}
                          id={"yoopapers"}
                          description={"An app for assisting in due process serving court papers. The primary users " +
                          "will be the administrators entering locations, and the individuals following GPS directions " +
                          "to the entered locations to serve the papers."}
                          name={"Owen Cramer and Tim Perr"}
                          email={"owcramer@mtu.edu"}
                          pictures={[]}
          />
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

