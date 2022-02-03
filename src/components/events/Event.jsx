import React from "react";

const Event = (props) => {
  let title = props.title;
  let location = props.location;
  let when = props.when;
  let children = props.children;

  return (
    <div className="event">
      <div className="card-body">
        <h3 className="card-title" style={{"margin-bottom": "1rem"}}>{title}</h3>
        <p className="card-text"><strong>{location}</strong> — <strong>{when}</strong></p>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Event;