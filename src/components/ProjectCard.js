import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import '../style/ProjectCard/ProjectCard.css';

function ProjectCard({ project, onclick }) {
  const {
    title, link, image, github, id,
  } = project;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <div
      key={id}
      ref={ref}
      style={{ width: '18rem' }}
      className={`project-card m-3 fade-in ${inView ? 'appear' : ''}`}
    >
      <div className="project-card-image-container"><img src={image} alt="project" className="project-card-image" /></div>

      <div className="overlay-content">
        <h4>{title}</h4>
        <div className="overlay-content-buttons">
          <a href={link} target="_blank" rel="noreferrer">
            Live Site
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <SiGithub />
          </a>
          <Link aria-label={`Read more about ${title}`} to="/projects" onClick={onclick}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
