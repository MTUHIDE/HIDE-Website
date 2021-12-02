import {Link} from "react-router-dom";
import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectSummaries = () => {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Current Projects</h3>
          </div>
        </div>
        <div className="row">
          <ProjectSummary title="HuskyHunt" isLeft={true}>
            <p>The HuskyHunt project is designed to allow Michigan Tech students and faculty to
              sell/trade their stuff in a secure manner. Product listings are only
              visible to those with an MTU email address.<br/><br/>
              <b>Visit the site at <a href="https://huskyhunt.com/"
                                      rel="noopener noreferrer"
                                      target="_blank">https://huskyhunt.com/</a></b></p>
          </ProjectSummary>

          <ProjectSummary title="Voting Booth" isLeft={false}>
            <p>A collaboration with Undergraduate Student Government to increase student
              feedback on key campus issues. Designed to be a quick, easy, and efficient
              way to survey the student population here at Michigan Tech.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="HIDE Website" isLeft={true}>
            <p>React application, primarily focused on website maintenance with some miscellaneous
              side projects such as the Winter Wonderhack site. </p>
          </ProjectSummary>

          <ProjectSummary title="ArcelorMittal / Cleveland Cliffs" isLeft={false}>
            <p>A web-based application and database to enhance the management of ArcelorMittal’s
              technical service organization based on territories. </p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="Chem Store" isLeft={true}>
            <p>Working with the MTU Chem Store to create a chemical inventory tracking website for
              chemicals distributed around campus.</p>
          </ProjectSummary>

          <ProjectSummary title="Pillow Talk" isLeft={false}>
            <p>Research project under Dr. Vertanen to build a voice controlled, inflatable pillow
              for a man living with ALS. This is a great project for anyone who is interested in
              hardware/software interface.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="GVSC: Command Simulator RTS" isLeft={true}>
            <p>A simulation project for the Ground Vehicle Systems Center (GVSC). Development is
              in Unreal Engine 4 for both VR (Vive Cosmos Elite) and PC.</p>
          </ProjectSummary>

          <ProjectSummary title="CCLC Queue" isLeft={false}>
            <p>A Canvas plugin that will be replacing the current system in the Computer Science
              Learning Center.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="LB: Little Brothers" isLeft={true}>
            <p>Little Brothers is a program that helps the elderly travel to doctor's
              appointments, small activities, provide meals, help with bills, etc. This website
              is being constructed by members of HIDE at MTU, started in 2021.</p>
          </ProjectSummary>

          <ProjectSummary title="Health Resource Hub" isLeft={false}>
            <p>Provides information about important community resources such as food,
              housing, transit, health, education, and more.
              Collaborating with IT Oxygen enterprise.</p>
          </ProjectSummary>

          {/*<div className="col-md-6 col-sm-12 col-xs-12 rightcol">*/}
            {/*<img*/}
            {/*src=" http://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"*/}
            {/*style={{height: 150 + 'px'}} alt={"Michigan Technological University"}/>*/}
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
      </div>
    </section>
  );
};

export default ProjectSummaries;