import React from 'react';
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiGit,
  DiSass,
  DiMysql,
  DiPhp,
  DiDocker,
} from 'react-icons/di';
import {
  SiGithub, SiNextdotjs,
} from 'react-icons/si';

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
    title: 'React.js',
    color: 'rgb(129, 223, 234)',
  },
  {
    id: 6,
    image: <DiGit />,
    title: 'Git',
    color: 'rgb(245, 81, 30)',
  },
  {
    id: 9,
    image: <DiSass />,
    title: 'SASS',
    color: 'pink',
  },
  {
    id: 10,
    image: <SiGithub />,
    title: 'Github',
    color: 'black',
  },
  {
    id: 11,
    image: <SiNextdotjs />,
    title: 'Next.js',
    color: 'black',
  },
  {
    id: 12,
    image: <DiMysql />,
    title: 'MySQL',
    color: 'rgb(0,117,142)',
  },
  {
    id: 13,
    image: <DiPhp />,
    title: 'PHP',
    color: 'rgb(79,91,145)',
  },
  {
    id: 14,
    image: <DiDocker />,
    title: 'Docker',
    color: 'rgb(24,100,233)',
  },
];

export default skills;
