import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
