// == Import npm
import React from 'react';
import LineIcon from 'react-lineicons';

// == Component
const Smalltitle = (props) => {
  return (
    <div className="my-smalltitle">
      <span className="my-smalltitle-icon">
        <LineIcon name={props.icon} />
      </span>
      <h4>{props.title}</h4>
    </div>
  );
};

// == Export default
export default Smalltitle;
