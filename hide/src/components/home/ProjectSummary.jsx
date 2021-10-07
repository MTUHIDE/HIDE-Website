import React from "react";

const ProjectSummary = (props) => {
  let className = "col-md-6 col-sm-12 col-xs-12 ";
  className = props.isLeft ? className + 'leftcol' : className + 'rightcol';

  return (
    <div className={className}>
      <h5>{props.title}</h5>
      {props.children}
    </div>
  )
};

export default ProjectSummary;