import React from 'react';
import { useInView } from 'react-intersection-observer';

function SkillCard(props) {
  const { skill } = props;
  const {
    image, title, color, id,
  } = skill;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <div
      className={`skill-card fade-in ${
        inView ? 'appear' : ''
      }`}
      key={id}
      ref={ref}
    >
      <div style={{ color: `${color}` }} className="skill-icon-bg">
        <div className="skill-icon">{image}</div>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default SkillCard;
