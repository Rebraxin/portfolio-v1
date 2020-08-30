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
          className="mi-progress-active"
          style={
            props.isVisible ? { width: `${props.percentage}%` } : { width: 0 }
          }
        ></span>
      );
    }
    return (
      <span
        className="mi-progress-active"
        style={{ width: `${props.percentage}%` }}
      ></span>
    );
  };
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage">
          <CountUp end={props.percentage} />%
        </div>
        <div className="mi-progress-container">{progressQuery()}</div>
      </div>
    </div>
  );
};

// == Export default
export default Progress;
