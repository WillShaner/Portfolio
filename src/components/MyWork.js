/* eslint-disable max-len */
import React from 'react';
import Row from 'react-bootstrap/Row';
import PROJECTS from '../data/projects';
import Project from './Project';

function MyWork({ setCounter }) {
  return (
    <Row className="bg-light justify-content-center" id="myWork">
      <h1 className="text-center py-5">My Work</h1>
      <div className="my-work-container py-5">
        {PROJECTS.map((PROJECT) => (
          <Project key={PROJECT.id} project={PROJECT} onclick={() => setCounter(PROJECT.id)} />
        ))}
      </div>
    </Row>
  );
}

export default MyWork;
