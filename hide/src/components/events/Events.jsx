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
          <Event title={"Final Presentations"} location={"Rekhi 214"} when={"December 1st and 8th from 6 to 7pm"} />
          <Event title={"Winter Wonderhack"} location={"Van Pelt and Opie Library"} when={"February 18th through 20th"}>
            <p>Winter Wonderhack is a 36 hour event where people from all different backgrounds come together, form teams around a problem or idea, and collaboratively plan, design, or code a unique solution from scratch.</p>
            <p><strong><a href={"https://winterwonderhack.com/#register"} target="_blank">Click here to register!</a></strong></p>
          </Event>
      </div>
    </section>
  );
};

export default UpcomingEvents;