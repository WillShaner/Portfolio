/* eslint-disable max-len */
import React from 'react';
import Headshot from '../assets/headshot.png';
import '../style/About/About.css';

function About() {
  return (
    <div className="row about">
      <h3 className="mb-4 text-uppercase">About me</h3>
      <div className="about-content">
        <img src={Headshot} alt="head shot" className="about-content-img img-fluid m-2" />
        <p className=" p-2 about-content-paragraph">My name is William Shaner and I am a front end developer. I am looking for Junior Front-End or Junior React Developer positions. I am a graduate of Altcademy`s front end program where I learned the core concepts of web development. During my time there I built several sites that were reviewed by my instructors and returned with feedback. I know the importance of creating a good user experience with responsiveness and animations. I would be willing to relocate or work remotely. When I am not coding I enjoy spending time with family and I am a huge NBA fan. </p>
      </div>

    </div>
  );
}

export default About;
