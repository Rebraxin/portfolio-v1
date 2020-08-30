// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';
import Socialicons from '../components/Socialicons';

// == Import local
import Layout from '../components/Layout';
import AnimatedTyping from '../components/AnimatedTyping';

// == Component
const Home = () => {
  const [information, setInformation] = useState('');
  const paramConfig = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: false,
        },
      },
      color: {
        value: '#6B6E70',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 1.5,
        random: true,
        anim: {
          speed: 0.2,
          size_min: 1,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 0.5,
        direction: 'top',
        out_mode: 'out',
      },
    },
  };
  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
  }, []);
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am{' '}
                  <span className="color-theme">{information.name}</span>
                </h1>
                <AnimatedTyping className="test" />
                {/* <p>{information.aboutContent}</p> */}
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// == Export default
export default Home;
