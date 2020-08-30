// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';

// == Import local
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import Resume from '../components/Resume';

// == Local
const Resumes = () => {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get('/api/skills').then((response) => {
      setSkills(response.data);
    });
    axios.get('/api/experience').then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <div className="my-skills-area my-section my-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="my-skills">
            <div className="row mt-30-reverse">
              {skills.map((skill) => (
                <TrackVisibility
                  once
                  className="col-lg-6 mt-30"
                  key={skill.title}
                >
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-resume-area my-section my-padding-top my-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Work Experiences" icon="briefcase" />
          <div className="my-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="my-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// == Export default
export default Resumes;
