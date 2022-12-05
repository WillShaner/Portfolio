import React from 'react';
import Background from '../assets/hero.jpg';
import '../style/Wrapper.css';
import MyWork from '../components/MyWork';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage({ setCounter }) {
  return (
    <div className="wrapper">
      <header>
        <img alt="background" src={Background} className="background" />
        <h1 className="title text-center">William Shaner</h1>
        <h1 className="sub-title text-center">Frontend Developer</h1>
      </header>
      <div>
        <Header />
        <MyWork setCounter={setCounter} />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
