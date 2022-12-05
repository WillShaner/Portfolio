import React from 'react';

function Thumbail({ project, setCounter }) {
  const {
    image, title,
  } = project;
  return (
    <div
      className="project-thumbnail d-flex flex-column align-items-center justify-content-center text-center pt-3"
      onClick={setCounter}
      aria-hidden="true"
    >
      <img src={image} alt="project" className="mb-4 img-fluid" />
      <h3>{title}</h3>
    </div>
  );
}

export default Thumbail;
