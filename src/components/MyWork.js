/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projects';
import ProjectCard from './ProjectCard';
import '../style/MyWork/MyWork.css';

function MyWork({ setCounter, limit, button }) {
  return (
    <div className="row my-work">
      <h3>My Work</h3>
      <div className="my-work-container">
        {PROJECTS.map((PROJECT) => (
          PROJECT.id <= limit
          && <ProjectCard key={PROJECT.id} project={PROJECT} onclick={() => setCounter(PROJECT.id)} />
        ))}
      </div>
      {button === true && <Link to="/projects" className="see-more-btn" onClick={() => setCounter(null)}>See more...</Link>}

    </div>
  );
}

export default MyWork;
