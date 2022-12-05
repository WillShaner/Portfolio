/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function Project(props) {
  const { project, onclick } = props;
  const {
    title, skills, link, image, github, id,
  } = project;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <Card
      key={id}
      ref={ref}
      style={{ width: '18rem' }}
      className={`project-card m-3 fade-in ${inView ? 'appear' : ''}`}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {skills.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="primary">
            <a className="text-white" href={link}>
              View Site
            </a>
          </Button>
          <Button variant="danger">
            <a className="text-white" href={github}>
              Github
            </a>
          </Button>
        </div>
        <Link to="/projects"><Button variant="success" className="w-100 mt-1" onClick={onclick}>Full page</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Project;
