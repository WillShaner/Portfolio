import React from 'react';
import Background from '../assets/hero.jpg';
import '../style/Wrapper.css';
import MyWork from './MyWork';
import Skills from './Skills';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function Wrapper() {
  return (
    <div className="wrapper">
      <header>
        <img alt="background" src={Background} className="background" />
        <h1 className="title text-center">William Shaner</h1>
        <h1 className="sub-title text-center">Frontend Developer</h1>
      </header>
      <div>
        <Header />
        <MyWork />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Wrapper;
