/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';

function Project(props) {
  const { project, onclick } = props;
  const {
    title, skills, link, image, github, id,
  } = project;
  const { ref, inView } = useInView({ threshold: 0.3 });
  const icon = {
    fontSize: 20,
  };
  return (
    <Card
      key={id}
      ref={ref}
      style={{ width: '18rem' }}
      className={`project-card m-3 fade-in ${inView ? 'appear' : ''}`}
    >
      <Card.Img variant="top" src={image} alt="project" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="d-flex flex-column skills-list">
          {skills.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </Card.Text>
        <div className="d-flex flex-column justify-content-end">
          <div className="d-flex justify-content-around">
            <Button id="button" variant="secondary">
              <a className="text-white" href={link}>
                Live Site
              </a>
            </Button>
            <Button id="button" variant="dark" style={icon}>
              <a className="text-white" href={github}>
                <SiGithub />
              </a>
            </Button>
          </div>
          <Link aria-label={`Read more about ${title}`} to="/projects"><Button id="button" variant="primary" className="w-100 mt-1" onClick={onclick}>Read More</Button></Link>
        </div>

      </Card.Body>
    </Card>
  );
}

export default Project;
