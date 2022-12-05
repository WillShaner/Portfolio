import project1 from '../assets/mathGame.png';
import project2 from '../assets/newsClone.png';
import bikeShop from '../assets/bike-shop.png';
import toDoList from '../assets/toDoList.png';
import appleClone from '../assets/appleClone.png';
import weather from '../assets/weatherApp.png';

const PROJECTS = [
  {
    id: 1,
    title: 'The Bike Shop',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'React'],
    link: 'https://phenomenal-chimera-e6d23f.netlify.app/',
    image: bikeShop,
    github: 'https://github.com/WillShaner/bike-shop',
    description: 'This mock bike shop was built using React and Bootstrap. The product features many components that could be seen in an actual e-commerce store. Some of these features include a cart, a shopping page with filters, a cart review page, and a checkout component created using Stripe. During this project I learned many of React`s hooks and were able to use them throughout the app. I wanted to showcase my skills with common frontend components such as the carousel and cart count badge in the navbar.',
    background: 'I built this project to work on my React skills and simultaneously work on my e-commerce building skills. This was a chance to work on my javascript logic to create the cart component and the cart review component. I gathered the images from Unsplash and IStock',
  },
  {
    id: 2,
    title: 'Weather App',
    skills: [
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
    description: 'This weather app was created using React, Bootstrap, and the Open Weather API. This project was mainly to showcase my skills working with RESTful APIs. The project began with gathering the data from API, chose which data is useful, and layout the data in a way that was user friendly. The application is completely responsive to all screen sizes and includes a refresh button using the application at different locations.',
    background: 'I built this project to work on my skills working with RESTful APIs. I used the Fetch API to make the server request. I got the background image from Unsplash and created a container that held all the data that the API provided.',
  },
  {
    id: 3,
    title: 'Apple Clone',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'GSAP'],
    link: 'https://dynamic-travesseiro-58dba1.netlify.app/',
    image: appleClone,
    github: 'https://github.com/WillShaner/AppleClone',
    description: 'This Apple clone was created using the Javascript, HTML, CSS, Bootstrap, and GSAP. This project was to showcase and work on my skills using GreenSock Animation Platform. I used GSAP to create the screen pin on the scroll of the images. This was also an opportunity to showcase my skills working with Bootstrap as this is a fully responsive site.',
    background: 'This was my first site created in Altcademy`s front-end program. I came back to the project several months later and was able to make it fully responsive and creating a navbar that changes on  screen size.',
  },
  {
    id: 4,
    title: 'To Do List',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'REST API'],
    link: 'https://fantastic-tapioca-49393c.netlify.app/',
    image: toDoList,
    github: 'https://github.com/WillShaner/To-Do-List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    background: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 5,
    title: 'Airbnb News Clone',
    skills: ['Bootstrap', 'HTML', 'CSS'],
    link: 'https://vocal-crepe-1c8ecc.netlify.app',
    image: project2,
    github: 'https://github.com/WillShaner/Airbnb_news_clone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    background: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 6,
    title: '10 Second Math Game',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript'],
    link: 'https://frolicking-kelpie-d4579c.netlify.app',
    image: project1,
    github: 'https://github.com/WillShaner/10-Second-Math-Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    background: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
];
export default PROJECTS;
