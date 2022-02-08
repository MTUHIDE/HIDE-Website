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
          {/*<section className="features-extra section-padding color2" id="votingbooth">*/}
            {/*<div className="container sm-padding">*/}
              {/*<div className="row flex-vertically">*/}
                {/*<div className="col-md-5 col-sm-12">*/}
                  {/*<div className="feature-list">*/}
                    {/*<h3 className="about">Voting Booth</h3>*/}
                    {/*<p>A collaboration with Undergraduate Student Government to increase student*/}
                      {/*feedback on key campus issues. Designed to be a quick, easy, and efficient*/}
                      {/*way to survey the student population here at Michigan Tech.*/}
                      {/*<br/><br/>*/}
                      {/*<strong>Team Lead(s):</strong> Eva Muller*/}
                      {/*<br/><br/>Want to learn more?*/}
                      {/*<br/>Contact: <strong><a*/}
                        {/*href="mailto:emmuller@mtu.edu">emmuller@mtu.edu</a></strong>*/}
                    {/*</p>*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="col-md-7 col-sm-12 center">*/}
                  {/*<Carousel*/}
                    {/*name={"votingbooth"}*/}
                    {/*picturePaths={[*/}
                      {/*"/img/currentprojects/votingbooth_screenshot1.png",*/}
                      {/*"/img/currentprojects/votingbooth_screenshot2.png"*/}
                      {/*]}*/}
                  {/*/>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</section>*/}
          <section className="features-extra section-padding color2" id="chemstore">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Chem Store</h3>
                    <p>Working with the MTU Chem Store to create a chemical inventory tracking website for
                      chemicals distributed around campus.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Brett Post
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:bwpost@mtu.edu">bwpost@mtu.edu</a></strong>
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
          <section className="features-extra section-padding color1" id="pillowtalk">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Pillow Talk</h3>
                    <p>Research project under Dr. Vertanen to build a voice controlled, inflatable pillow
                      for a man living with ALS. This is a great project for anyone who is interested in
                      hardware/software interface.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Ian Lawrie
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:iplawrie@mtu.edu">iplawrie@mtu.edu</a></strong>
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
          <section className="features-extra section-padding color2" id="gvsc">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">GVSC: Command Simulator RTS</h3>
                    <p>A simulation project for the Ground Vehicle Systems Center (GVSC). Development is
                      in Unreal Engine 4 for both VR (Vive Cosmos Elite) and PC.
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
          <section className="features-extra section-padding color1" id="cclcqueue">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">CCLC Queue</h3>
                    <p>A Canvas plugin that will be replacing the current system in the Computer Science
                      Learning Center.
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
          <section className="features-extra section-padding color2" id="lb">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">LB: Little Brothers</h3>
                    <p>Little Brothers is a program that helps the elderly travel to doctor's
                      appointments, small activities, provide meals, help with bills, etc. This website
                      is being constructed by members of HIDE at MTU, started in 2021.
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
          <section className="features-extra section-padding color1" id="hidewebsite">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Maintenance Team</h3>
                    <p><strong><a href="https://huskyhunt.com/"
                         rel="noopener noreferrer"
                                           target="_blank">HuskyHunt</a>:</strong> Buying/Selling/Carpooling site for the MTU campus. We launched in Spring 2021. Mostly
                      written in Django.
                      <br/><br/>
                      <strong>HIDE Website:</strong> The website you are on right now!
                      <br/><br/>
                      {/*<strong>ArcelorMittal / Cleveland Cliffs:</strong> A web-based application and database to enhance the management of ArcelorMittal’s*/}
                      {/*technical service organization based on territories.*/}

                      <strong>Team Lead(s):</strong> Charles Vidro
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:cjvidro@mtu.edu">cjvidro@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <Carousel
                    name={"hidewebsite"}
                    picturePaths={[
                      "/img/currentprojects/hidewebsite_screenshot.png",
                      "/img/currentprojects/huskyhunt_screenshot.png",
                      "/img/currentprojects/arcelormittal_screenshot.jpg"
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="features-extra section-padding color1" id="health_resource_hub">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">Health Resource Hub</h3>
                    <p>Provides information about important community resources such as food, housing, transit, health, education, and more. Collaborating with IT Oxygen enterprise.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Abby Myers
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:abigailm@mtu.edu">abigailm@mtu.edu</a></strong>
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
          <section className="features-extra section-padding color2" id="gdls">
            <div className="container sm-padding">
              <div className="row flex-vertically">
                <div className="col-md-5 col-sm-12">
                  <div className="feature-list">
                    <h3 className="about">GDLS: Web Scraping and Image Labeling</h3>
                    <p>Sponsored by General Dynamics Land Systems (GDLS), this is a project based around developing
                      tools for web scraping and image labeling.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Jonathan Rabideau, Eva Muller
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                          href="mailto:jarabide@mtu.edu">jarabide@mtu.edu</a></strong> and
                        <strong><a href="mailto:emmuller@mtu.edu"> emmuller@mtu.edu</a></strong>
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

