// == Import npm
import React from 'react';
import LineIcon from 'react-lineicons';

// == Component
const Service = (props) => {
  return (
    <div className="my-service">
      <span className="my-service-icon">
        <LineIcon name={props.content.icon} />
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  );
};

// == Export default
export default Service;
