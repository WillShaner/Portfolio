import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import '../style/ProjectCard/ProjectCard.css';

function ProjectCard({ project, onclick }) {
  const [overlayShow, setOverlayShow] = useState(false);
  const {
    title, link, image, github, id,
  } = project;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <div
      onMouseEnter={() => setOverlayShow(true)}
      onMouseLeave={() => setOverlayShow(false)}
      key={id}
      ref={ref}
      style={{ width: '18rem' }}
      className={`project-card m-3 fade-in ${inView ? 'appear' : ''}`}
    >
      <img src={image} alt="project" />

      { overlayShow && (
        <>
          <div className={`overlay-container ${overlayShow && 'fade-in-container'}`} />

          <div className={`overlay-content ${overlayShow && 'fade-in-content'}`}>
            <h4>{title}</h4>
            <div className="overlay-content-buttons">
              <a href={link}>
                Live Site
              </a>
              <a href={github}>
                <SiGithub />
              </a>
              <Link aria-label={`Read more about ${title}`} to="/projects" onClick={onclick}>Read More</Link>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default ProjectCard;
