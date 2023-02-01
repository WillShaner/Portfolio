/* eslint-disable max-len */
// import project1 from '../assets/mathGame.webp';
import bikeShop from '../assets/bikeShop.webp';
import toDoList from '../assets/to-do-list.png';
// import appleClone from '../assets/appleClone.webp';
import weather from '../assets/weatherApp.webp';
import nbaStats from '../assets/nbaStats.webp';
import monogramClone from '../assets/monogram-clone-1.png';
// landscape images ;
import BikeLandscape from '../assets/landscape/bike-shop.png';
import MonogramLandscape from '../assets/landscape/monogram-clone.png';
import NBAstatLandscape from '../assets/landscape/nba-stats-app.png';
import ToDoLandscape from '../assets/landscape/to-do.png';
import WeatherLandscape from '../assets/landscape/weather-app.png';

const PROJECTS = [
  {
    id: 1,
    title: 'The Bike Shop',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'React'],
    link: 'https://phenomenal-chimera-e6d23f.netlify.app/',
    image: bikeShop,
    github: 'https://github.com/WillShaner/bike-shop',
    description: 'This mock bike shop was built using React and Bootstrap. The product features many components that could be seen in an actual e-commerce store. Some of these features include a cart, a shopping page with filters, a cart review page, and a checkout component created using Stripe. During this project I learned many of React`s hooks including useState, useEffect, useContext, and useRef. I wanted to showcase my skills with common frontend components such as the carousel and cart count badge in the navbar.',
    background: 'I built this project to work on my React skills and simultaneously work on my e-commerce building skills. This was a chance to work on my javascript logic to create the cart component and the cart review component. I gathered the images from Unsplash and IStock',
    landscapeImage: BikeLandscape,
  },
  {
    id: 2,
    title: 'Weather App',
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'Javascript',
      'React',
      'REST API',
    ],
    link: 'https://admirable-quokka-13bdbf.netlify.app/',
    image: weather,
    github: 'https://github.com/WillShaner/Weather-App',
    description: 'This weather app was created using React, Bootstrap, and the Open Weather API. This project was mainly to showcase my skills working with RESTful APIs. The project began with gathering the data from API, chose which data is useful, and layout the data in a way that was user friendly. The application is completely responsive to all screen sizes and includes a refresh button using the application at different locations.',
    background: 'I built this project to work on my skills working with RESTful APIs. I used the Fetch API to make the server request. I got the background image from Unsplash and created a container that held all the data that the API provided.',
    landscapeImage: WeatherLandscape,
  },
  // {
  //   id: 3,
  //   title: 'Apple Clone',
  //   skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'GSAP'],
  //   link: 'https://dynamic-travesseiro-58dba1.netlify.app/',
  //   image: appleClone,
  //   github: 'https://github.com/WillShaner/AppleClone',
  //   description: 'This Apple clone was created using the Javascript, HTML, CSS, Bootstrap, and GSAP. This project was to showcase and work on my skills using GreenSock Animation Platform. I used GSAP to create the screen pin on the scroll of the images. This was also an opportunity to showcase my skills working with Bootstrap as this is a fully responsive site.',
  //   background: 'This was my first site created in Altcademy`s front-end program. I came back to the project several months later and was able to make it fully responsive and creating a navbar that changes on  screen size.',
  // },
  {
    id: 4,
    title: 'To Do List',
    skills: ['HTML', 'CSS', 'Javascript', 'REST API'],
    link: 'https://willshaner.github.io/To-Do-List/',
    image: toDoList,
    github: 'https://github.com/WillShaner/To-Do-List',
    description: 'This to do list was created using HTML, CSS, JQuery, and a several RESTful APIs. This project was to showcase my skills interacting with a RESTful API. The user can add tasks, delete tasks, and mark the tasks complete. The user can filter the tasks between completed and active tasks. The user can also toggle between light and dark mode.',
    background: 'This project was created as part of Altcademy`s frontend program. The site uses Altcademy`s API to GET, POST, DELETE, and PUT tasks. The project has been updated and is now more of a productivity app with the current weather, a motivational quote, and a to-do list.',
    landscapeImage: ToDoLandscape,
  },
  {
    id: 5,
    title: 'NBA stats site',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Next.js', 'SASS'],
    link: 'https://nba-stats-site.vercel.app/',
    image: nbaStats,
    github: 'https://github.com/WillShaner/NBA-stats-site',
    description: 'This project was built using Next.js along with Bootstrap. The site includes a home  page and a search page in which a user can search for any NBA player since 1979. The user can then see their season averages and can then search for season averages by a different season.',
    background: 'This project was built to practice my skills and better learn Next.js. I learned about the file structure that Next.js uses and the benefits of Next.js for performance. The app fetches data from the balldontlie API.',
    landscapeImage: NBAstatLandscape,
  },
  {
    id: 6,
    title: 'Monogram Clone',
    skills: ['Javascript', 'HTML', 'CSS', 'SASS'],
    link: 'https://willshaner.github.io/Monogram-Clone/',
    image: monogramClone,
    github: 'https://github.com/WillShaner/Monogram-Clone',
    description: 'This project was built using Next.js along with Bootstrap. The site includes a home  page and a search page in which a user can search for any NBA player since 1979. The user can then see their season averages and can then search for season averages by a different season.',
    background: 'This project was built to practice my skills and better learn Next.js. I learned about the file structure that Next.js uses and the benefits of Next.js for performance. The app fetches data from the balldontlie API.',
    landscapeImage: MonogramLandscape,
  },
  // {
  //   id: 7,
  //   title: '10 Second Math Game',
  //   skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript'],
  //   link: 'https://frolicking-kelpie-d4579c.netlify.app',
  //   image: project1,
  //   github: 'https://github.com/WillShaner/10-Second-Math-Game',
  //   description: 'This project was built using JQuery, HTML, and CSS. The project is a game where a user has 10 seconds to answer as many questions as possible before the timer is up. If the user answers correctly then time is added to the clock and points to the score. The user has the option to choose which kind of math questions they would like to answer and the range of numbers the questions should be in. The higher the numbers the more points added per questions answered correctly. The high score of the game is stored in Altcademy`s RESTful API and is updated if the user beats the high score.',
  //   background: 'The goal of this project was to work on my javascript login and problem solving. There was a lot of time spent configuring the questions so that they appear with the larger number first and divide evenly for the division problems. I made the design of the project myself.',
  // },
];
export default PROJECTS;
