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
                          title={"Whirlpool Project"}
                          id={"hf"}
                          description={"We are working on improving the sustainability of appliances for Whirlpool Corporation using human factors techniques and methodology."}
                          name={"Morgan Aufdencamp, Hudson Look"}
                          email={"maufdenc@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/hf.jpg",
                          ]}
          />
          <CurrentProject isDark={false}
                          title={"Chem Store"}
                          id={"chemstore"}
                          description={"A web application that keeps track of the inventory of chemicals on campus.\n" +
                          "Users can search for chemicals, log transfers, request chemicals, and more!"}
                          name={"Yasmin Fitzgerald & Drew Broekhuis"}
                          email={"ysfitzge@mtu.edu"}
                          pictures={[
                            "/img/currentprojects/chemstore_screenshot.png",
                          ]}
          />
          <CurrentProject isDark={true}
                          title={"CS Dept Scheduling App"}
                          id={"csdept"}
                          description={"A scheduling application for the CS Department that will keep track of class " +
                          "data (such as credits, prerequisites, and scheduling conflicts), as well as faculty data " +
                          "(such as teaching history)."}
                          name={"Zach Starry"}
                          email={"ztstarry@mtu.edu"}
                          pictures={["/img/currentprojects/CSschedulingGrid.png",
                            "/img/currentprojects/CSschedulingList.png"]}
          />
          <CurrentProject isDark={false}
                          title={"YooPapers"}
                          id={"yoopapers"}
                          description={"An app for assisting in due process serving court papers. The primary users " +
                          "will be the administrators entering locations, and the individuals following GPS directions " +
                          "to the entered locations to serve the papers."}
                          name={"Rhys Brockenshire"}
                          email={"rwbrocke@mtu.edu"}
                          pictures={["/img/currentprojects/yoopapers.jpg"]}
          />
          <CurrentProject isDark={true}
                          title={"Gardner Rifle Club"}
                          id={"grc"}
                          description={"Recreate an outdated application used by the Gardner Rifle Club for scoring," +
                          "scheduling, and membership tracking using a modern framework."}
                          name={"Kyle Hamby"}
                          email={"kjhamby@mtu.edu"}
                          pictures={["/img/currentprojects/gardner_rifle.jpg"]}
          />
          <CurrentProject isDark={true}
                          title={"Michigan Herp Atlas"}
                          id={"herpatlas"}
                          description={"A mobile web application for recording real-time field observations of herpetofauna" +
                          " (amphibians and reptiles) for Michigan Herp Atlas. This program will directly feed into the online " +
                          " database for a variety of users including citizen scientists, researchers, academics, agencies and nonprofits."}
                          name={"Alyssa Tripp"}
                          email={"ajvangor@mtu.edu"}
                          pictures={["/img/currentprojects/herpatlas.png"]}
          />
          <CurrentProject isDark={false}
                          title={"Machine Shop Check-in System"}
                          id={"mscheckin"}
                          description={"Made for a machine shop at Michigan Tech. A checkout system that uses a QR code on each machine to verify that a student " +
                          "has met all the required training before usage."}
                          name={"Josh Kozlowski"}
                          email={"jdkozlow@mtu.edu"}
                          pictures={["/img/currentprojects/mtu_logo.webp"]}
          />
          <CurrentProject isDark={true}
                          title={"Wrestling Club"}
                          id={"wclub"}
                          description={"A website that will serve as a hub for the wrestling club. It will educate about the club and its history, " +
                          "keep track of events, provide a space for sponsors and fundraising, and hold a media gallery."}
                          name={"Chloe Scheetz & Zak Senske"}
                          email={"cescheet@mtu.edu"}
                          pictures={["/img/currentprojects/mtu_logo.webp"]}
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
