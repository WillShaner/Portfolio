import React, { useEffect } from 'react';
import Background from '../assets/green-bg.webp';
import '../style/Wrapper.css';
import MyWork from '../components/MyWork';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

function HomePage({ setCounter }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wrapper">
      <header>
        <img alt="background" src={Background} className="background" />
        <h1 className="title">William Shaner</h1>
        <h2 className="sub-title">Frontend Developer</h2>
      </header>
      <div>
        <Navbar />
        <About />
        <MyWork setCounter={setCounter} limit="3" button />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
