import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useInView } from 'react-intersection-observer';

function Project(props) {
  const { project } = props;
  const {
    title, description, link, image, github,
  } = project;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <Card
      ref={ref}
      style={{ width: '18rem' }}
      className={`project-card m-3 fade-in ${inView ? 'appear' : ''}`}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description.map((x) => (
            <li>{x}</li>
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
      </Card.Body>
    </Card>
  );
}

export default Project;
