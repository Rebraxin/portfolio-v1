// == Import npm
import React, { useState } from 'react';
import * as Icon from 'react-feather';
import FsLightbox from 'fslightbox-react';

// == Component
const Portfolio = (props) => {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url, git } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div
      className={
        props.isVisible ? 'my-portfolio my-portfolio-visible' : 'my-portfolio'
      }
    >
      <div className="my-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {!url ? null : (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          )}
          {!git ? null : (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={git}>
                <Icon.GitHub />
              </a>
            </li>
          )}
        </ul>
      </div>
      {!url ? (
        <h5>{title}</h5>
      ) : (
        <h5>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
};

// == Export default
export default Portfolio;
