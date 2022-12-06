import React from 'react';
import PROJECTS from '../data/projects';
import ProjectOutline from '../components/ProjectOutline';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyWork from '../components/MyWork';
import ProjectSlider from '../components/ProjectSlider';

function ProjectPage({ projectCount, setCounter }) {
  return (
    <>
      <Header />

      {projectCount === null

        ? <MyWork setCounter={setCounter} limit="6" button="false" />
        : (
          <div>
            {
              PROJECTS.map((PROJECT) => (
                PROJECT.id === projectCount && <ProjectOutline project={PROJECT} key={PROJECT.id} />
              ))
            }
            <ProjectSlider currentProject={projectCount} setCounter={setCounter} />

          </div>
        )}
      <Footer />
    </>

  );
}

export default ProjectPage;
