import React from 'react';
import skills from '../data/skills';
import SkillCard from './SkillCard';
import '../style/Skills/Skills.css';

function Skills() {
  return (
    <div className="row skills">
      <h3>Skills</h3>
      <div className="skills-card-container">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
