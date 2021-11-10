// == Import npm
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import LineIcon from 'react-lineicons';

// == Component
const Header = () => {
  const [information, setInformation] = useState('');
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? 'my-header is-visible' : 'my-header'}>
      <button onClick={handleNavigationToggler} className="my-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="my-header-inner">
        <div className="my-header-image">
          <Link to="/">
            <img src={information.brandImage} alt="brandimage" />
          </Link>
        </div>

        <ul className="my-header-menu">
          <li>
            <NavLink exact to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="my-header-copyright">
          &copy; {new Date().getFullYear()}{' '}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/cedric-paje-b69a4818a/"
            >
              Themes
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
};

// == Export default
export default Header;
