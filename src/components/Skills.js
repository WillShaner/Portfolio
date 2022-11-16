import React from 'react';
import Row from 'react-bootstrap/Row';
import skills from '../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <Row className="justify-content-center align-items-center" id="skills">
      <h1 className="text-center mt-5">Skills</h1>
      <div className="my-work-container">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </Row>
  );
};

export default Skills;
