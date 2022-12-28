import React from 'react';
import '../style/ProjectSlider.css';
import PROJECTS from '../data/projects';
import Thumbnail from './Thumbnail';

function ProjectSlider({ currentProject, setCounter }) {
  return (
    <div className="bg-light py-3">
      <h3 className="text-center my-4">More Projects</h3>
      <div className="d-flex justify-content-center slider-container">
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
    </div>

  );
}

export default ProjectSlider;
