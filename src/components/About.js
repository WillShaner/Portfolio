/* eslint-disable max-len */
/* eslint-disable-next-line react/no-unescaped-entities  */

import React from 'react';
import Headshot from '../assets/headshot_circle.JPG';
import '../style/About/About.css';

function About() {
  return (
    <div className="row about">
      <h3 className="mb-4 text-uppercase">About me</h3>
      <div className="about-content">
        <img src={Headshot} alt="head shot" className="about-content-img img-fluid m-2 rounded" />
        <p className=" p-2 about-content-paragraph">
          Hello! I&apos;m an adaptable Full-Stack Developer with a knack for bringing ideas to life through code. Proficient in languages like React, JavaScript, and PHP (Laravel), I navigate both front-end finesse and back-end intricacies.
          Having transitioned from a non-traditional background through a bootcamp, I&apos;ve settled into the role of a full-time developer. Freelance projects have broadened my skills, making me well-versed in various facets of software development.
          Currently exploring the realms of Java, my commitment to continuous learning keeps me on the cutting edge of technology. Whether it&apos;s crafting user-friendly interfaces or diving into the complexities of backend systems, I&apos;m all about creating impactful solutions.
          If you&apos;re into dynamic software development and exploring new possibilities, let&apos;s connect. Excited about the potential of our collaborative endeavors!
        </p>
      </div>

    </div>
  );
}

export default About;
