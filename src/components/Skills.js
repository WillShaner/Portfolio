import React from 'react';
import Row from 'react-bootstrap/Row';
import skills from '../data/skills';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <Row className="justify-content-center align-items-center" id="skills">
      <h3 className="text-center mt-5 text-uppercase">Skills</h3>
      <div className="my-work-container">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </Row>
  );
}

export default Skills;
