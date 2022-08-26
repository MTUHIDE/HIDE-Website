import React from "react";
import Event from "./Event";

const UpcomingEvents = () => {
  return (
    <section className="blog-intro section-padding" id="events">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Upcoming Events</h3>
          </div>
        </div>
          <Event title={"First General Body Meeting Fall 2022"} location={"Rekhi 214 or Zoom (by request)"} when={"August 31st, 2022 from 6pm to 7pm."}>
            <p><strong><a href={"https://forms.gle/gXkiwDcF3AQVSMb57"} target="_blank" rel="noopener noreferrer">Request Zoom Meeting Invite. <i className="fa fa-external-link" /></a></strong></p>
          </Event>
          <Event title={"General Body Meetings"} location={"Rekhi 214 or Zoom (by request)"} when={"Every Wednesday of the semester from 6pm to 7pm."}>
            <p><strong><a href={"https://forms.gle/gXkiwDcF3AQVSMb57"} target="_blank" rel="noopener noreferrer">Request Zoom Meeting Invite. <i className="fa fa-external-link" /></a></strong></p>
          </Event>
          {/*<Event title={"Winter Wonderhack"} location={"Van Pelt and Opie Library"} when={"February 18th through 20th."}>*/}
            {/*<p>Winter Wonderhack is a 36 hour event where people from all different backgrounds come together, form teams around a problem or idea, and collaboratively plan, design, or code a unique solution from scratch.</p>*/}
            {/*<p><strong><a href={"https://winterwonderhack.com/#register"} target="_blank" rel="noopener noreferrer">Click here to register! <i className="fa fa-external-link" /></a></strong></p>*/}
          {/*</Event>*/}
      </div>
    </section>
  );
};

export default UpcomingEvents;