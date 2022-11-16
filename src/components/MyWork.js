import React from 'react';
import PROJECTS from '../data/projects';
import Project from './Project';
import Row from 'react-bootstrap/Row';

export const MyWork = () => {
  return (
    <Row className="bg-light justify-content-center" id="myWork">
      <h1 className="text-center py-5">My Work</h1>
      <div className="my-work-container py-5">
        {PROJECTS.map((PROJECT, index) => (
          <Project key={index} project={PROJECT} />
        ))}
      </div>
    </Row>
  );
};
