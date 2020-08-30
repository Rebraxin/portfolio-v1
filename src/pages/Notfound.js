// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import local
import Layout from '../components/Layout';

// == Component
const Notfound = () => {
  return (
    <Layout>
      <div className="my-about-area my-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="notfound">
                <div className="notfound-inner text-center">
                  <h1>404</h1>
                  <h3>Whoops!!! Page not found!</h3>
                  <Link to="/" className="my-button">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// == Export default
export default Notfound;
