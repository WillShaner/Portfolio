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
    description: 'This to do list was created using HTML, CSS, JQuery, and a RESTful API. This project was to showcase my skills interacting with a RESTful API. The user can add tasks, delete tasks, and mark the tasks complete. The user can filter the tasks between completed and active tasks. The user can also toggle between light and dark mode.',
    background: 'This project was created as part of Altcademy`s frontend program. The site uses Altcademy`s API to GET, POST, DELETE, and PUT tasks. The background is a changes on every load from Unsplash.',
  },
  {
    id: 5,
    title: 'Airbnb News Clone',
    skills: ['Bootstrap', 'HTML', 'CSS'],
    link: 'https://vocal-crepe-1c8ecc.netlify.app',
    image: project2,
    github: 'https://github.com/WillShaner/Airbnb_news_clone',
    description: 'This project was created using HTML, CSS, and Bootstrap. This project was built to work on my skills with Bootstrap and building responsive sites. During this project I learned about Bootstrap`s basic features such as the expanding navbar. The project is fully responsive and some of the images change order on screen resizing.',
    background: 'This project was a part of Altcademy`s frontend program. The goal of the project was get comfortable with building sites with Bootstrap which after doing so I was very comfortable. The project was based on the Airbnb News site(at the time)',
  },
  {
    id: 6,
    title: '10 Second Math Game',
    skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript'],
    link: 'https://frolicking-kelpie-d4579c.netlify.app',
    image: project1,
    github: 'https://github.com/WillShaner/10-Second-Math-Game',
    description: 'This project was built using JQuery, HTML, and CSS. The project is a game where a user has 10 seconds to answer as many questions as possible before the timer is up. If the user answers correctly then time is added to the clock and points to the score. The user has the option to choose which kind of math questions they would like to answer and the range of numbers the questions should be in. The higher the numbers the more points added per questions answered correctly. The high score of the game is stored in Altcademy`s RESTful API and is updated if the user beats the high score.',
    background: 'The goal of this project was to work on my javascript login and problem solving. There was a lot of time spent configuring the questions so that they appear with the larger number first and divide evenly for the division problems. I made the design of the project myself.',
  },
];
export default PROJECTS;
