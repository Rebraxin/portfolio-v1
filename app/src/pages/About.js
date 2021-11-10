// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import * as Icon from 'react-feather';

// == Import local
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Service from '../components/Service';

// == Component
const About = () => {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);

  const handleToggler = (event) => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="my-about-area my-section my-padding-top">
        <div className="container">
          <Sectiontitle title="About" />
          <div className="row">
            <div className="col-lg-6">
              <div className="my-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="my-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="my-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make websites more & more
                  interactive with web animations.
                </p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {information.age} Years old
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b>{' '}
                      <a href={'mailto:' + information.email}>
                        {information.email}
                      </a>
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.address1 ? null : (
                    <li>
                      <b>Area Code</b> {information.address1}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Status</b> {information.freelanceStatus}
                    </li>
                  )}
                </ul>
                <a href={information.cvfile} className="my-button">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-service-area my-section my-padding-top my-padding-bottom">
        <div className="container">
          <Sectiontitle title="Abilities" />
          <div className="my-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// == Export default
export default About;
