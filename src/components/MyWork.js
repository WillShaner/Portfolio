/* eslint-disable max-len */
import React from 'react';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PROJECTS from '../data/projects';
import Project from './Project';

function MyWork({ setCounter, limit, button }) {
  return (
    <Row className="bg-light justify-content-center" id="myWork">
      <h3 className="text-center py-5 text-uppercase">My Work</h3>
      <div className="my-work-container py-5">
        {PROJECTS.map((PROJECT) => (
          PROJECT.id <= limit
          && <Project key={PROJECT.id} project={PROJECT} onclick={() => setCounter(PROJECT.id)} />
        ))}
      </div>
      {button === true && <Link to="/projects" className="text-center"><Button id="button" className="px-5 py-3 mb-4" variant="dark">See more...</Button></Link>}

    </Row>
  );
}

export default MyWork;
