import React from 'react';
import '../style/Project/Project.css';

function ProjectOutline(props) {
  const { project } = props;
  const {
    image, title, link, github, description, background, skills,
  } = project;
  return (
    <section className="project">
      <div className="project-img-desc">
        <img src={image} alt="project" className="img-fluid" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="project-background">
        <div>
          <div className="project-background-desc">
            <h2>BACKGROUND</h2>
            <p>{background}</p>
          </div>
          <div className="project-background-buttons">
            <a href={link}>Live Site</a>
            <a href={github}>Github</a>
          </div>
        </div>
        <div className="project-background-skills">
          <h2>SKILLS</h2>
          <ul>
            {skills.map((skill) => (
              <li>
                {' '}
                -
                {' '}
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectOutline;
