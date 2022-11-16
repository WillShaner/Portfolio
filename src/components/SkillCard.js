import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style/SkillCard.css';

function SkillCard(props) {
  const { skill } = props;
  const {
    image, title, color, id,
  } = skill;
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <div
      className={`skill-card m-5 d-flex flex-column align-items-center text-center fade-in ${
        inView ? 'appear' : ''
      }`}
      key={id}
      ref={ref}
    >
      <div style={{ color: `${color}` }} className="skill-icon card-bg">
        <div className="p-1">{image}</div>
      </div>
      <h6 className="mt-3">{title}</h6>
    </div>
  );
}

export default SkillCard;
