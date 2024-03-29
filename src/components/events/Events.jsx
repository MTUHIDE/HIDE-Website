import React from "react";
import Event from "./Event"

const UpcomingEvents = () => {
  return (
    <section className="blog-intro section-padding" id="events">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Upcoming Events</h3>
          </div>
        </div>
        <div className="row vertical-align">
          <div className="col-md-8 col-sm-12">
            {/*<Event title={"Recruitment Meeting"} location={"Location TBD"} when={"March 15th, 2023 from 6pm to 7pm."}>*/}
            {/*  <p>Come to our recruitment meeting to learn more about HIDE and how to join! Pizza and drinks provided.</p>*/}
            {/*  <p><strong>Contact <a href="mailto:abigailm@mtu.edu">Abby Myers </a> or*/}
            {/*    <a href="mailto:jerryjon@mtu.edu"> Jerry Jones </a> to request the Zoom link.</strong></p>*/}
            {/*</Event>*/}
            <Event title={"Winter Wonderhack 2023"} location={"Van Pelt and Opie Library"} when={"March 17th through 19th."}>
            <p>Winter Wonderhack is a 36 hour event where people from all different backgrounds come together, form teams around a problem or idea, and collaboratively plan, design, or code a unique solution from scratch.</p>
            <p><strong><a href={"https://winterwonderhack.com"} target="_blank" rel="noopener noreferrer">Click here to view more info! <i className="fa fa-external-link" /></a></strong></p>
            </Event>
            <Event title={"General Body Meetings"} location={"Fisher 329 or Zoom (by request)"} when={"Every Wednesday from 6pm to 7pm."}>
              <p><strong>Contact <a href="mailto:abigailm@mtu.edu">Abby Myers </a> or
                <a href="mailto:jerryjon@mtu.edu"> Jerry Jones </a> to request the Zoom link.</strong></p>
            </Event>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4 style={{padding: 10}}>Latest LinkedIn News</h4>
            {/*Click on three dots on LinkedIn post and select "Embed This Post", copy and paste code here, specify height=350 (adjust if need be) and width=100%*/}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7041772148541030400" height="600"
                    width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
            {/*<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7028942379025895424" height="600"*/}
            {/*        width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>*/}
          </div>
        </div>
          {/*<Event title={"Winter Wonderhack"} location={"Van Pelt and Opie Library"} when={"February 18th through 20th."}>*/}
            {/*<p>Winter Wonderhack is a 36 hour event where people from all different backgrounds come together, form teams around a problem or idea, and collaboratively plan, design, or code a unique solution from scratch.</p>*/}
            {/*<p><strong><a href={"https://winterwonderhack.com/#register"} target="_blank" rel="noopener noreferrer">Click here to register! <i className="fa fa-external-link" /></a></strong></p>*/}
          {/*</Event>*/}
      </div>
    </section>
  );
};

export default UpcomingEvents;