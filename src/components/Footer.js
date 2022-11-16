import React from 'react';

const Footer = () => {
  const footerBreak = {
    width: '100%',
    backgroundColor: 'grey',
    height: '1px',
    marginBottom: 10,
  };
  return (
    <>
      <div style={footerBreak}></div>
      <p className="m-3">William Shaner Portfolio 2022</p>
    </>
  );
};

export default Footer;
