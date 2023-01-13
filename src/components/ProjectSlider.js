import React from 'react';
import '../style/ProjectSlider/ProjectSlider.css';
import PROJECTS from '../data/projects';
import Thumbnail from './Thumbnail';

function ProjectSlider({ currentProject, setCounter }) {
  return (
    <section className="slider">
      <h3 className="text-center my-4">More Projects</h3>
      <div className="slider-container">
        {PROJECTS.map((project) => (

          project.id !== currentProject && (
            <Thumbnail
              key={project.id}
              project={project}
              setCounter={() => setCounter(project.id)}
            />
          )

        ))}

      </div>
    </section>

  );
}

export default ProjectSlider;
