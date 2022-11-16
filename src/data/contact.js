import React from 'react';
import {
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsFacebook,
} from 'react-icons/bs';

const contact = [
  {
    id: 1,
    image: <BsLinkedin />,
    link: 'https://www.linkedin.com/in/will-shaner-315500245/',
  },
  {
    id: 2,
    image: <BsTwitter />,
    link: 'https://mobile.twitter.com/williamshaner1',
  },
  {
    id: 3,
    image: <BsInstagram />,
    link: 'https://www.instagram.com/will.shaner/?hl=en',
  },
  { id: 4, image: <BsGithub />, link: 'https://github.com/WillShaner' },
  {
    id: 5,
    image: <BsFacebook />,
    link: 'https://www.facebook.com/william.shaner.750',
  },
];

export default contact;
