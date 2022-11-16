import React from 'react';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiGit,
} from 'react-icons/di';
import { SiGreensock, SiFigma } from 'react-icons/si';

const skills = [
  {
    id: 1,
    image: <DiJavascript />,
    title: 'Javascript',
    color: 'rgb(254, 215, 4)',
  },
  {
    id: 2,
    image: <DiHtml5 />,
    title: 'HTML',
    color: 'rgb(254, 109, 2)',
  },
  {
    id: 3,
    image: <DiCss3 />,
    title: 'CSS',
    color: 'rgb(15, 156, 230)',
  },
  {
    id: 4,
    image: <DiBootstrap />,
    title: 'Bootsrap',
    color: 'rgb(131, 9, 251)',
  },
  {
    id: 5,
    image: <DiReact />,
    title: 'React',
    color: 'rgb(129, 223, 234)',
  },
  {
    id: 6,
    image: <DiGit />,
    title: 'Git',
    color: 'rgb(245, 81, 30)',
  },
  {
    id: 7,
    image: <SiGreensock />,
    title: 'GSAP',
    color: 'green',
  },
  {
    id: 8,
    image: <SiFigma />,
    title: 'Figma',
    color: 'rgba(162,89,255,1)',
  },
];

export default skills;
