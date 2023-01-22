import React, { useEffect } from 'react';
import PROJECTS from '../data/projects';
import ProjectOutline from '../components/ProjectOutline';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MyWork from '../components/MyWork';
import ProjectSlider from '../components/ProjectSlider';

function ProjectPage({ projectCount, setCounter }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      {projectCount === null

        ? <MyWork setCounter={setCounter} limit="6" button="false" />
        : (
          <main>
            {
              PROJECTS.map((PROJECT) => (
                PROJECT.id === projectCount && <ProjectOutline project={PROJECT} key={PROJECT.id} />
              ))
            }
            <ProjectSlider currentProject={projectCount} setCounter={setCounter} />

          </main>
        )}
      <Footer />
    </>

  );
}

export default ProjectPage;
