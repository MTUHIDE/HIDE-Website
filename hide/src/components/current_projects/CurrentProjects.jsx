import React from 'react';
import '../home/Home.css';
// import Header from '../Header';

export default class CurrentProjects extends React.Component {

  render() {
      return (
          <>
              <div id="top-current">
                  <section className="hero" id="currentProjectsHero">
                      <div className="container">
                          <div className="row">
                              <div className="blur"></div>
                              <div className="col-md-10 col-md-offset-1">
                                  <div className="hero-content text-center">
                                      <h1 className="h1shaddow">HIDE</h1>
                                      <p className="intro" style={{fontSize: 30}}>Current Projects</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <section className="features-extra section-padding color1" id="huskyhunt">
                            {/*ref={ref => {this.targetRef = ref}}>*/}
                      <div className="container sm-padding">
                          <div className="row flex-vertically">
                              <div className="col-md-5 col-sm-12">
                                  <div className="feature-list">
                                      <h3 className="about">HuskyHunt</h3>
                                      <p>The HuskyHunt project is designed to allow Michigan Tech students and faculty to
                                          sell/trade their stuff in a secure manner. Product listings are only
                                          visible to those with an MTU email address.
                                          <br/><br/>
                                          <strong>Team Lead(s):</strong> Ethan Matzdorf
                                          <br/><br/>
                                          <strong>Currently looking for testers!<br/> Visit <a href="https://huskyhunt.com/"
                                                                                          rel="noopener noreferrer"
                                                                                          target="_blank">https://huskyhunt.com/</a> for
                                              more information.</strong>
                                          <br/><br/>Want to learn more?
                                          <br/>Contact: <strong><a
                                              href="mailto:eamatzdo@mtu.edu">eamatzdo@mtu.edu</a></strong>
                                      </p>
                                  </div>
                              </div>
                              <div className="col-md-7 col-sm-12 center">
                                  <div id="huskyhuntCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                                      {/*Indicators*/}
                                      <ol className="carousel-indicators" id="carousel-indicators">
                                          <li data-target="#huskyhuntCarousel" data-slide-to="0" className="active"/>
                                          {/*<li data-target="#huskyhuntCarousel" data-slide-to="1"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/huskyhunt_screenshot.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/currentprojects/ethan_m.png" alt="Team Lead: Ethan M"/>*/}
                                          {/*</div>*/}
                                      </div>

                                      {/*Left and right controls*/}
                                      <a className="left carousel-control" href="#huskyhuntCarousel" data-slide="prev">
                                          <span className="glyphicon glyphicon-chevron-left"/>
                                          <span className="sr-only">Previous</span>
                                      </a>
                                      <a className="right carousel-control" href="#huskyhuntCarousel" data-slide="next">
                                          <span className="glyphicon glyphicon-chevron-right"/>
                                          <span className="sr-only">Next</span>
                                      </a>
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
                                          <strong>Team Lead(s):</strong> Justin Martin
                                          <br/><br/>Want to learn more?
                                          <br/>Contact: <strong><a
                                              href="mailto:justinma@mtu.edu">justinma@mtu.edu</a></strong>
                                      </p>
                                  </div>
                              </div>
                              <div className="col-md-7 col-sm-12 center">
                                  <div id="votingboothCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                                      {/*Indicators*/}
                                      <ol className="carousel-indicators" id="carousel-indicators">
                                          <li data-target="#votingboothCarousel" data-slide-to="0" className="active"/>
                                          <li data-target="#votingboothCarousel" data-slide-to="1"/>
                                          {/*<li data-target="#votingboothCarousel" data-slide-to="2"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/votingbooth_screenshot1.png" alt=""/>
                                          </div>
                                          <div className="item">
                                              <img src="/img/currentprojects/votingbooth_screenshot2.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/justin_m.jpg" alt="Team Lead: Justin M"/>*/}
                                          {/*</div>*/}
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
                  <section className="features-extra section-padding color1" id="arcelormittal">
                      <div className="container sm-padding">
                          <div className="row flex-vertically">
                              <div className="col-md-5 col-sm-12">
                                  <div className="feature-list">
                                      <h3 className="about">Arcelormittal</h3>
                                      <p>A web-based application and database to enhance the management of ArcelorMittal’s
                                          technical service organization based on territories.
                                          <br/><br/>
                                          <strong>Team Lead(s):</strong> Shruti Amre, Abby Myers
                                          <br/><br/>Want to learn more?
                                          <br/>Contact: <strong><a
                                              href="mailto:smamre@mtu.edu">smamre@mtu.edu</a></strong><br/>
                                          <strong><a href="mailto:abigailm@mtu.edu">abigailm@mtu.edu</a></strong>
                                      </p>
                                  </div>
                              </div>
                              <div className="col-md-7 col-sm-12 center">
                                  <div id="arcelormittalCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
                                      {/*Indicators*/}
                                      <ol className="carousel-indicators" id="carousel-indicators">
                                          <li data-target="#arcelormittalCarousel" data-slide-to="0" className="active"/>
                                          {/*<li data-target="#arcelormittalCarousel" data-slide-to="1"/>*/}
                                          {/*<li data-target="#arcelormittalCarousel" data-slide-to="2"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/arcelormittal_screenshot.jpg" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/shruti.jpg" alt=""/>*/}
                                          {/*</div>*/}
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/abby_m.jpg" alt=""/>*/}
                                          {/*</div>*/}
                                      </div>

                                      {/*Left and right controls*/}
                                      <a className="left carousel-control" href="#arcelormittalCarousel" data-slide="prev">
                                          <span className="glyphicon glyphicon-chevron-left"/>
                                          <span className="sr-only">Previous</span>
                                      </a>
                                      <a className="right carousel-control" href="#arcelormittalCarousel" data-slide="next">
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
                                          {/*<li data-target="#chemstoreCarousel" data-slide-to="1"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/chemstore_screenshot.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/brett_p.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                                          {/*<li data-target="#pillowtalkCarousel" data-slide-to="2"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/pillowtalk_screenshot1.png" alt=""/>
                                          </div>
                                          <div className="item">
                                              <img src="/img/currentprojects/pillowtalk_screenshot2.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/ian_l.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                                          {/*<li data-target="#gvscCarousel" data-slide-to="1"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/gvsc_screenshot.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/thomas_g.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                                          {/*<li data-target="#cclcqueueCarousel" data-slide-to="2"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/cclcqueue_screenshot1.png" alt=""/>
                                          </div>
                                          <div className="item">
                                              <img src="/img/currentprojects/cclcqueue_screenshot2.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/will_h.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                                          {/*<li data-target="#lbCarousel" data-slide-to="1"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/lb_screenshot.png" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/mike_b.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                                      <h3 className="about">HIDE Website</h3>
                                      <p>React application, primarily focused on website maintenance with some miscellaneous
                                          side projects such as the Winter Wonderhack site.
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
                                          {/*<li data-target="#hidewebsiteCarousel" data-slide-to="1"/>*/}
                                      </ol>

                                      {/*Wrapper for slides*/}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="/img/currentprojects/hidewebsite_screenshot.jpg" alt=""/>
                                          </div>
                                          {/*<div className="item">*/}
                                          {/*    <img src="/img/charles_v.jpg" alt=""/>*/}
                                          {/*</div>*/}
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
                  <section className="sign-up section-padding text-center" id="contact">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-6 col-md-offset-3">
                                  <h3>Contact</h3>
                                  <p>Our general meetings are <strong>Wednesdays from 6-7pm via <a
                                      href="https://us02web.zoom.us/j/87004752696?pwd=cWRzS1RGQ256Q09Qd0hvMlRybUZBUT09">Zoom</a>.
                                  </strong> Prospective
                                      students are encouraged to attend.
                                      For more information, please contact <strong><a
                                          href="mailto:hide-management-l@mtu.edu">hide-management-l@mtu.edu</a></strong>
                                  </p>
                                  <a href="https://www.linkedin.com/company/humane-interface-design-enterprise/" rel="noopener noreferrer" target="_blank">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                           className="bi bi-linkedin" viewBox="0 0 16 16">
                                          <path
                                              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                      </svg>
                                  </a>
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
          </>
      );
  }
}

