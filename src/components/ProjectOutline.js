import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../style/Project.css';

function ProjectOutline(props) {
  const { project } = props;
  const {
    image, title, link, github, description, background,
  } = project;
  return (
    <Container fluid className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start project">
      <div className="d-flex flex-column justify-content-center px-2">
        <img src={image} alt="project" className="img-fluid" />
        <div>
          <h2 className="mt-4">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="px-2">
        <div>
          <h2>BACKGROUND</h2>
          <p>{background}</p>
        </div>
        <div className="w-100 d-flex justify-content-around my-5">
          <Button variant="danger">
            <a href={link} className="text-white">Live Site</a>
          </Button>
          <Button variant="primary"><a href={github}>Github</a></Button>
        </div>
      </div>
    </Container>
  );
}

export default ProjectOutline;
