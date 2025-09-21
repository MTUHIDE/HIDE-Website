import {Link} from "react-router-dom";
import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectSummaries = () => {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Current Teams/Projects</h3>
          </div>
        </div>
        <div className="row">
          <ProjectSummary title="Chem Store" isLeft={true}>
            <p>A web application that keeps track of the inventory of chemicals on campus.
              Users can search for chemicals, log transfers, request chemicals, and more!</p>
          </ProjectSummary>
          <ProjectSummary title="Gardner Rifle Club" isLeft={false}>
            <p>Recreate an outdated application used by the Gardner Rifle Club for scoring,scheduling, 
              and membership tracking using a modern framework.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="CS Dept Scheduling App" isLeft={true}>
            <p>A scheduling application for the CS Department that will keep
              track of class data (such as credits, prerequisites, and scheduling conflicts), as well
              as faculty data (such as teaching history).</p>
          </ProjectSummary>
          {/* <ProjectSummary title="Keewenaw Historical Society" isLeft={false}>
            <p>An android app for their kiosk which people can use to search for people, wars, 
              and other events in their database. It will also be capable of displaying more than 40,000 photos.</p>
          </ProjectSummary> */}
          <ProjectSummary title="Human Factors Team" isLeft={false}>
            <p> This team focuses on UI/UX-centered design for HIDE's interface projects and collaboration with
              other enterprises.</p>
          </ProjectSummary>
        </div>
        <div className="row">
        <ProjectSummary title="Little Brothers" isLeft={true}>
            <p>A web application designed to streamline the medical transportation services that LBFE offers
              free-of-charge to elderly Houghton and Keweenaw Counties residents age 60+.</p>
          </ProjectSummary>
          <ProjectSummary title="SLS Website" isLeft={false}>
            <p>MTU's Sound and Lighting Services has an employee website for keeping track
              of upcoming events and supply stock. This project focuses on updating that
              website and adding new features.</p>
          </ProjectSummary>
          {/* <ProjectSummary title="MTU Courses" isLeft={false}>
            <p>An application that will present MTU course information in a more user-friendly manner than banweb.</p>
          </ProjectSummary> */}
        </div>
        <div className="row">
        <ProjectSummary title="YooPapers" isLeft={true}>
            <p>An app for assisting in due process serving court papers. The primary
              users will be the administrators entering locations, and the individuals following
              GPS directions to the entered locations to serve the papers.</p>
          </ProjectSummary>
          <ProjectSummary title="Herp Atlas" isLeft={false}>
            <p>A mobile web application for recording real-time field observations of herpetofauna 
              (amphibians and reptiles) for Michigan Herp Atlas. This program will directly feed into 
              the online database for a variety of users including citizen scientists, researchers, 
              academics, agencies and nonprofits.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          {/* <ProjectSummary title="SERC" isLeft={true}>
            <p>An application that can detect activity in confusing visual background. Uses advanced 
              image processing that can detect humans obscured by camouflage.</p>
          </ProjectSummary> */}
          <ProjectSummary title="Machine Shop Check-In" isLeft={true}>
            <p>A web application that will allow students to check in and out of the machine shop, 
              as well as reserve equipment and tools.</p>
          </ProjectSummary>
          <ProjectSummary title="Wrestling Club" isLeft={false}>
            <p>A website that will serve as a hub for the wrestling club. It will educate about the club 
              and its history, keep track of events, provide a space for sponsors and fundraising, 
              and hold a media gallery.</p>
          </ProjectSummary>
        </div>
          {/*<div className="col-md-6 col-sm-12 col-xs-12 rightcol">*/}
          {/*  <img*/}
          {/*  src="https://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"*/}
          {/*  style={{height: 150 + 'px'}} alt={"Michigan Technological University"}/>*/}
          {/*</div>*/}

          <br/>
            <div className="col-md-12" style={{padding: "20px 0"}}>
              <div>
                <Link to="/currentprojects">
                  <button type="btn" className="btn"  id="learn-more-light">
                    <h5>More Project Info</h5>
                  </button>
                </Link>
              </div>
            </div>
      </div>
    </section>
  );
};

export default ProjectSummaries;