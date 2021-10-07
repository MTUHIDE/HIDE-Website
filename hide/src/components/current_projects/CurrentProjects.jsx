import React from 'react';
import '../home/Home.css';
import Contact from "../Contact/Contact";

export default class CurrentProjects extends React.Component {

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
                    <p className="intro" style={{fontSize: 30}}>Current Projects</p>
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
                      way to survey the student population here at Michigan Tech.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Eva Muller
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:emmuller@mtu.edu">emmuller@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="votingboothCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#votingboothCarousel" data-slide-to="0" className="active"/>
                      <li data-target="#votingboothCarousel" data-slide-to="1"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/votingbooth_screenshot1.png" alt=""/>
                      </div>
                      <div className="item">
                        <img src="/img/currentprojects/votingbooth_screenshot2.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#votingboothCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#votingboothCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
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
                  <div id="chemstoreCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#chemstoreCarousel" data-slide-to="0" className="active"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/chemstore_screenshot.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#chemstoreCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#chemstoreCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
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
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Ian Lawrie
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:iplawrie@mtu.edu">iplawrie@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="pillowtalkCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#pillowtalkCarousel" data-slide-to="0" className="active"/>
                      <li data-target="#pillowtalkCarousel" data-slide-to="1"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/pillowtalk_screenshot1.png" alt=""/>
                      </div>
                      <div className="item">
                        <img src="/img/currentprojects/pillowtalk_screenshot2.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#pillowtalkCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#pillowtalkCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
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
                      <strong>Team Lead(s):</strong> Thomas Grifka
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:tjgrifka@mtu.edu">tjgrifka@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="gvscCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#gvscCarousel" data-slide-to="0" className="active"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/gvsc_screenshot.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#gvscCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#gvscCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
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
                    <p>A Canvas plugin that will be replacing the current system in the Computer Science
                      Learning Center.
                      <br/><br/>
                      <strong>Team Lead(s):</strong> Will Holland
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:whhollan@mtu.edu">whhollan@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="cclcqueueCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#cclcqueueCarousel" data-slide-to="0" className="active"/>
                      <li data-target="#cclcqueueCarousel" data-slide-to="1"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/cclcqueue_screenshot1.png" alt=""/>
                      </div>
                      <div className="item">
                        <img src="/img/currentprojects/cclcqueue_screenshot2.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#cclcqueueCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#cclcqueueCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
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
                      <strong>Team Lead(s):</strong> Mike Boisvert
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:mdboisve@mtu.edu">mdboisve@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="lbCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#lbCarousel" data-slide-to="0" className="active"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/lb_screenshot.png" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#lbCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#lbCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
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
                      <strong>ArcelorMittal / Cleveland Cliffs:</strong> A web-based application and database to enhance the management of ArcelorMittal’s
                      technical service organization based on territories.

                      <br/><br/>
                      <strong>Team Lead(s):</strong> Charles Vidro
                      <br/><br/>Want to learn more?
                      <br/>Contact: <strong><a
                        href="mailto:cjvidro@mtu.edu">cjvidro@mtu.edu</a></strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 center">
                  <div id="hidewebsiteCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                    {/*Indicators*/}
                    <ol className="carousel-indicators" id="carousel-indicators">
                      <li data-target="#hidewebsiteCarousel" data-slide-to="0" className="active"/>
                      <li data-target="#hidewebsiteCarousel" data-slide-to="1"/>
                      <li data-target="#hidewebsiteCarousel" data-slide-to="2"/>
                    </ol>

                    {/*Wrapper for slides*/}
                    <div className="carousel-inner">
                      <div className="item active">
                        <img src="/img/currentprojects/hidewebsite_screenshot.jpg" alt=""/>
                      </div>
                      <div className="item">
                        <img src="/img/currentprojects/huskyhunt_screenshot.png" alt=""/>
                      </div>
                      <div className="item">
                        <img src="/img/currentprojects/arcelormittal_screenshot.jpg" alt=""/>
                      </div>
                    </div>

                    {/*Left and right controls*/}
                    <a className="left carousel-control" href="#hidewebsiteCarousel" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left"/>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#hidewebsiteCarousel" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right"/>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Link to Past Projects page (currently un-implemented)*/}
          {/*<div className="row justify-content-center" id="pastprojects">*/}
          {/*    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">*/}
          {/*    <button type="button" className="btn btn-lg btn-block">*/}
          {/*        Past Projects*/}
          {/*    </button>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <Contact/>

        </div>
      </>
    );
  }
}

