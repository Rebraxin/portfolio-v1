// Import npm
import React from 'react';

// == Component
const Resume = (props) => {
  const {
    year,
    position,
    graduation,
    university,
    company,
    details,
  } = props.resumeData;
  return (
    <div className="my-resume mt-30">
      <div className="my-resume-summary">
        <h6 className="my-resume-year">{year}</h6>
      </div>
      <div className="my-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="my-resume-company">{company || university}</h6>
        <ul>
          {details.map((detail, id) => (
            <li key={id}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// == Export default
export default Resume;
