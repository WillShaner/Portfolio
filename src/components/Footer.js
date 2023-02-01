import React from 'react';

function Footer() {
  const footerBreak = {
    width: '100%',
    backgroundColor: 'grey',
    height: '1px',
    marginBottom: 10,
  };
  return (
    <footer>
      <div style={footerBreak} />
      <p>William Shaner Portfolio 2023</p>
    </footer>
  );
}

export default Footer;
