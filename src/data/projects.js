import project1 from '../assets/mathGame.png';
import project2 from '../assets/newsClone.png';
import project3 from '../assets/BlackJack.png';
import bikeShop from '../assets/bike-shop.png';
import toDoList from '../assets/toDoList.png';
import appleClone from '../assets/appleClone.png';
import weather from '../assets/weatherApp.png';
const PROJECTS = [
  {
    id: 1,
    title: 'The Bike Shop',
    description: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'React'],
    link: 'https://phenomenal-chimera-e6d23f.netlify.app/',
    image: bikeShop,
    github: 'https://github.com/WillShaner/bike-shop',
  },
  {
    id: 2,
    title: 'Weather App',
    description: [
      'Bootstrap',
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'REST API',
    ],
    link: 'https://admirable-quokka-13bdbf.netlify.app/',
    image: weather,
    github: 'https://github.com/WillShaner/Weather-App',
  },
  {
    id: 3,
    title: 'Apple Clone',
    description: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'GSAP'],
    link: 'https://dynamic-travesseiro-58dba1.netlify.app',
    image: appleClone,
    github: 'https://github.com/WillShaner/AppleClone',
  },
  {
    id: 4,
    title: 'To Do List',
    description: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'REST API'],
    link: 'https://fantastic-tapioca-49393c.netlify.app/',
    image: toDoList,
    github: 'https://github.com/WillShaner/To-Do-List',
  },
  {
    id: 5,
    title: 'Airbnb News Clone',
    description: ['Bootstrap', 'HTML', 'CSS'],
    link: 'https://vocal-crepe-1c8ecc.netlify.app',
    image: project2,
    github: 'https://github.com/WillShaner/Airbnb_news_clone',
  },
  {
    id: 6,
    title: '10 Second Math Game',
    description: ['Bootstrap', 'HTML', 'CSS', 'Javascript'],
    link: 'https://frolicking-kelpie-d4579c.netlify.app',
    image: project1,
    github: 'https://github.com/WillShaner/10-Second-Math-Game',
  },
];
export default PROJECTS;
