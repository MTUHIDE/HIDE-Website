import {Link} from "react-router-dom";
import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectSummaries = () => {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Current Projects and Teams</h3>
          </div>
        </div>
        <div className="row">
          <ProjectSummary title="CCLC Queue" isLeft={false}>
            <p>A web application built into Canvas which will provide a question/answer
              queue for the CCLC.</p>
          </ProjectSummary>
          <ProjectSummary title="Chem Store" isLeft={true}>
            <p>A web application that keeps track of the inventory of chemicals on campus.
              Users can search for chemicals, log transfers, request chemicals, and more!</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="GDLS: Web Scraping and Image Labeling" isLeft={false}>
            <p>Sponsored by General Dynamics Land Systems (GDLS), this is a project based around developing
              tools for web scraping and image labeling.</p>
          </ProjectSummary>
          <ProjectSummary title="GVSC: Command Simulator RTS" isLeft={true}>
            <p>A simulation project for the Ground Vehicle Systems Center (GVSC). A simple real-time strategy game
              (RTS) with separate different HUD options to test the effectiveness of VR HUD’s design and user ergonomics.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="Human Factors Team" isLeft={false}>
            <p>Team of UX designers working on various projects
              (CCLC Queue, Chemstore, Pillowtalk, and little brothers).</p>
          </ProjectSummary>
          <ProjectSummary title="LB: Little Brothers" isLeft={true}>
            <p>Little Brothers is a program that helps the elderly travel to doctor's
              appointments, small activities, provide meals, help with bills, etc.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="SLS Website" isLeft={false}>
            <p>MTU's Sound and Lighting Services has an employee website for keeping track
              of upcoming events and supply stock. This project focuses on updating that
              website and adding new features.</p>
          </ProjectSummary>
          <ProjectSummary title="Traverse City Electric" isLeft={true}>
            <p>Traverse City has a new network of electric vehicle charging stations. They
              would like a website that educates the public on electric vehicles and provides
              a map of where to find the charging stations.</p>
          </ProjectSummary>
        </div>
        <div className="row">
          <ProjectSummary title="YooPapers" isLeft={false}>
            <p>YooPapers is an app for assisting in due process serving court papers. The primary
              users will be the administrators entering locations, and the individuals following
              GPS directions to the entered locations to serve the papers.</p>
          </ProjectSummary>
          <ProjectSummary title="CS Dept Scheduling App" isLeft={true}>
            <p>The CS department is in need of a scheduling application. This application will keep
              track of class data (such as credits, prerequisites, and scheduling conflicts), as well
              as faculty data (such as teaching history).</p>
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