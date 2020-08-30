// == Import npm
import React from "react";

// == Component
const Sectiontitle = (props) => {
  return (
    <div className="my-sectiontitle">
      <h2>{props.title}</h2>
      <span>{props.title}</span>
    </div>
  );
}

// == Export default
export default Sectiontitle;
