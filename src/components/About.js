/* eslint-disable max-len */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Headshot from '../assets/headshot.png';
import '../style/About.css';

function About() {
  return (
    <Row className="text-dark bg-white flex-column align-items-center text-center p-4">
      <h1 className="mb-4">About me</h1>
      <div className=" about d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <img src={Headshot} alt="head shot" className="about-img img-fluid m-2" />
        <p className=" p-2 about-paragraph">My name is William Shaner and I am a front end developer. I am looking for Junior Front-End or Junior React Developer positions. I am a graduate of Altcademy`s front end program where I learned the core concepts of web development. During my time there I built several sites that were reviewed by my instructors and returned with feedback. I know the importance of creating a good user experience with responsiveness and animations. I am located in Arkansas but would be willing to relocate or work remotely. When I am not coding I enjoy spending time with family and I am a huge NBA fan. </p>
      </div>

    </Row>
  );
}

export default About;
