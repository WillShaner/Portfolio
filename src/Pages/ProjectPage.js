import React from 'react';
import PROJECTS from '../data/projects';
import ProjectOutline from '../components/ProjectOutline';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Header from '../components/Header';
import MyWork from '../components/MyWork';
import ProjectSlider from '../components/ProjectSlider';

function ProjectPage({ projectCount, setCounter }) {
  return (
    <>
      <Header />

      {projectCount === null

        ? <MyWork setCounter={setCounter} />
        : (
          <div>
            {
              PROJECTS.map((PROJECT) => (
                PROJECT.id === projectCount && <ProjectOutline project={PROJECT} key={PROJECT.id} />
              ))
            }

          </div>
        )}
      <ProjectSlider currentProject={projectCount} setCounter={setCounter} />
      <Contact />
      <Footer />
    </>

  );
}

export default ProjectPage;
