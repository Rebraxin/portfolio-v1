// == Import npm
import React from 'react';
import CountUp from 'react-countup';

// == Component
const Progress = (props) => {
  const winWidth = window.innerWidth;
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <span
          className="my-progress-active"
          style={
            props.isVisible ? { width: `${props.percentage}%` } : { width: 0 }
          }
        ></span>
      );
    }
    return (
      <span
        className="my-progress-active"
        style={{ width: `${props.percentage}%` }}
      ></span>
    );
  };
  return (
    <div className="my-progress">
      <h6 className="my-progress-title">{props.title}</h6>
      <div className="my-progress-inner">
        <div className="my-progress-percentage">
          <CountUp end={props.percentage} />%
        </div>
        <div className="my-progress-container">{progressQuery()}</div>
      </div>
    </div>
  );
};

// == Export default
export default Progress;
