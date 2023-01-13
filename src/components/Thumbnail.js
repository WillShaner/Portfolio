import React from 'react';

function Thumbnail({ project, setCounter }) {
  const {
    image, title,
  } = project;
  return (
    <div
      className="project-thumbnail"
      onClick={setCounter}
      aria-hidden="true"
    >
      <div className="project-thumbnail-img-container"><img src={image} alt="project" /></div>
      <h4>{title}</h4>
    </div>
  );
}

export default Thumbnail;
