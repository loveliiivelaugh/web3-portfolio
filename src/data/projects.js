//import pics
import flash_cards from "../assets/images/flash-cards.png";
import lyrics_search from "../assets/images/lyrics-search.png";
import meal_finder from "../assets/images/meal-finder.png";
import weather from "../assets/images/weather.png";
import exercise_tracker from "../assets/images/exercise-tracker.png";
import readme_generator from "../assets/images/screenshot-readme-generator.png";
import employee_management_system from "../assets/images/employee-management-system-screenshot.png";
import election_api from "../assets/images/2020-election-api.png";
import tastyGen from '../assets/images/tastyGen_screenshot.png';
import rps from '../assets/images/rps.png';
import workday from '../assets/images/workday-scheduler.png';
import code_quiz from '../assets/images/code-quiz.png';
import weather_dashboard from '../assets/images/bootstrap-weather-dashboard.png';
import any_eats from '../assets/images/any-eats.jpg';
import web from './../assets/images/web.jpeg';
import blockchain from '../assets/images/blockchain.jpeg';
import ai from '../assets/images/ai.jpeg';
import backend from '../assets/images/backend.jpeg';
import fintech from '../assets/images/fintech.jpeg';
import ecommerce from '../assets/images/ecommerce.jpeg';

// PROJECTS DATA
export const projectsData = [
  {
    title: "Web Development",
    features:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    img: web,
    url: "https://basic-crypto-dashboard.netlify.app/",
    repo: "https://github.com/loveliiivelaugh/crypto-dashboard",
  },
  {
    title: "Blockchain",
    features:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    img: blockchain,
    url: "https://web3-scheduler.netlify.app/",
    repo: "https://github.com/loveliiivelaugh/web3-appointment-scheduler"
  },
  {
    title: "Fintech",
    features:
      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
    img: fintech,
    url: "https://basic-plaid-dashboard.herokuapp.com/",
    repo: "https://github.com/loveliiivelaugh/basic-plaid-dashboard"
  },
  {
    id: 'coffee-shop',
    label: ['react', 'shopify'],
    img: 'https://i.imgur.com/3uRmDeL.png',
    title: 'Shopify Coffee Shop',
    info:
      '',
    info2:
      '',
    features:
      'Large E-Commerce Shopify Coffee Shop featuring 8 pages excluding each of the single product pages for every product available. UI is built with React and Bootstrap. Context is used for state management. I built this example shop to highlight my ability to build a custom React front end making use of Shopifys custom apps API.',
    technologies: 
      'Bootstrap, JavaScript, React, Shopify, Context, Netlify',
    likes: 
      'What I would like to do better is optimizing the performance of this website. Probably by optimizing the images being rendered on page load. Also I would like to implement some caching methods again to speed up page load time as that is extremely important for UX and e-commerce particularly.',
    learnedFront:
      '',
    learnedBack:
      '',
    url: 'https://coffee-shop-shopify-context.netlify.app/',
    repo: 'https://github.com/mwoodward1990/coffee-shopify', // if no repo, the button will not show up
    // for carousel
    src: 'https://i.imgur.com/ZDkKXFY.png',
    altText: "Example Coffee Shopify Shop",
    caption: "",
    header: "",
    key: "4",
    gif: "",
    tutorial: {
        author: null,
        link: null,
        review: {
          comments: '',
          stars: null
        }
      },
  },

  {
    id: 'employee-management-system',
    label: ['react', 'noSql'],
    img: employee_management_system,
    alt: '',
    caption: '',
    title: 'Employee Management System',
    info:
      '',
    info2:
      '',
    features:
      'Employee management system built with React, MaterialUI, Firebase for auth and for the noSql Firestore database. This is an attempt to build this project ahead of having to build it as part of a coding bootcamp curriculum I am about to begin.',
    technologies: 
      'React, Javascript, Firebase',
    likes: '',
    likesNotUsedYet: // This is not in use at the moment
      '',
    learnedFront:
      '',
    learnedBack:
      '',
    url: '#',
    repo: 'https://github.com/loveliiivelaugh/employee-management-system', // if no repo, the button will not show up
    key: "",
    src: employee_management_system,
    gif: "",
    tutorial: {
      author: '',
      link: 'https://github.com/fenil29/employee-management-system-frontend-react',
      review: {
        comments: 'I do not believe there is a tutorial for this project. I just did a basic search for the concept I was looking to build and came across this project. It looked and functioned similar to what I was looking to build and used this project as inspiration.',
        stars: null
      }
    },
    description: 'Employee management system built with React, MaterialUI, Firebase for auth and for the noSql Firestore database. This is an attempt to build this project ahead of having to build it as part of a coding bootcamp curriculum I am about to begin.',
    link: 'https://fire-react-employee-management.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/employee-management-system',
  },
  {
    id: 'exercise-tracker',
    label: ['react', 'noSql'],
    img: exercise_tracker,
    alt: '',
    caption: '',
    title: 'Exercise Tracker',
    info:
      '',
    info2:
      '',
    features:
      'This is a sample exercise tracker app built with React and Firebase.',
    technologies: 
      'React, Javascript, Firebase',
    likes: '',
    likesNotUsedYet: // This is not in use at the moment
      '',
    learnedFront:
      '',
    learnedBack:
      '',
    url: '#',
    repo: 'https://github.com/loveliiivelaugh/exercise-tracker', // if no repo, the button will not show up
    key: "",
    src: exercise_tracker,
    gif: "",
    tutorial: {
      author: '@sanderdebr ( Dev.to )',
      link: 'https://dev.to/sanderdebr/let-s-build-workout-tracker-with-react-and-firebase-part-1-1hng',
      review: {
        comments: "I just built from inspiration and sight. I did not follow the tutorial so I am not sure the similarities. I did built with MaterialUI as well so the UI looks very similar. I used Firebase for storage though.",
        stars: 5
      }
    },
    description: 'This is a sample exercise tracker app built with React and Firebase.',
    link: 'https://fire-react-exercise-tracker.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/exercise-tracker',
  },
  {
    id: 'readme-generator',
    label: ['react'],
    img: readme_generator,
    alt: '',
    caption: '',
    title: 'README Generator',
    info:
      '',
    info2:
      '',
    features:
      'A small README generator app to stream line the documentation process of your projects. Built with React.js and hooks.',
    technologies: 
      'React, Javascript, Firebase',
    likes: '',
    likesNotUsedYet: // This is not in use at the moment
      '',
    learnedFront:
      '',
    learnedBack:
      '',
    url: 'https://react-readme-generator.netlify.app/',
    repo: 'https://github.com/loveliiivelaugh/readme-generator', // if no repo, the button will not show up
    key: "",
    src: readme_generator,
    gif: "",
    tutorial: {
      author: '@arturssmirnovs ( GitHub )',
      link: "https://github.com/arturssmirnovs/github-profile-readme-generator",
      review: {
        comments: "I don't think there was a tutorial for it. I just came across this project/tool doing a simple search for the concept and then built a replica from the ground up. Different frameworks were used. The project I used for inspiration was built in Vue. I built mine in React. Will add more features soon. (More options for README and add open API docs to interface with the generator programatically.",
        stars: null
      }
    },
    description: 'A small README generator app to stream line the documentation process of your projects. Built with React.js and hooks.',
    link: 'https://react-readme-generator.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/readme-generator',
  },
  {
    id: 'tastyGen',
    label: ['materialize', 'vanilla', 'local storage'],
    img: tastyGen,
    url: 'https://loveliiivelaugh.github.io/nu-group-project-1/',
    repo: 'https://loveliiivelaugh.github.io/nu-group-project-1/',
    title: 'TastyGen',
    features: "TastyGen is an application created for a user that is interested in finding new and unique recipes.",
    technologies: 'JavaScript, Materialize',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },
  {
    id: 'rock-paper-scissors',
    label: ['vanilla'],
    img: rps,
    url: 'https://loveliiivelaugh.github.io/nu-javascript03-mini-project/',
    repo: '',
    title: 'Rock Paper Scissors',
    features: "A vanilla JavaScript Rock Paper Scissor's game.",
    technologies: 'JavaScript',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },
  {
    id: 'work-day-scheduler',
    label: ['vanilla', 'local storage'],
    img: workday,
    url: 'https://loveliiivelaugh.github.io/nu-hw5-daily-scheduler/',
    repo: 'https://github.com/loveliiivelaugh/nu-hw5-daily-scheduler',
    title: 'Work Day Scheduler',
    features: 'A small daily scheduler app built with vanilla HTML, CSS, JavaScript, and Moment.js. Seperates the day into hourly time blocks that the user can store notes and appointments in. Data is persisted using local storage.',
    technologies: 'JavaScript, Moment.js',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },
  {
    id: 'code-quiz',
    label: ['vanilla'],
    img: code_quiz,
    url: 'https://loveliiivelaugh.github.io/nu-hw4-coding-quiz/',
    repo: 'https://github.com/loveliiivelaugh/nu-hw4-coding-quiz',
    title: 'Code Quiz',
    features: ' A small quiz application to repeatedly ask the user coding practice questions until either the time runs out or the questions run out and keeps track of the score and the time along the way.',
    technologies: 'JavaScript, Local Storage',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },

  {
    id: 'weather-dashboard',
    label: ['vanilla', 'bootstrap', 'API'],
    img: weather_dashboard,
    url: 'https://loveliiivelaugh.github.io/nu-hw6-weather-dashboard/',
    repo: 'https://github.com/loveliiivelaugh/nu-hw6-weather-dashboard',
    title: 'Weather Dashboard',
    features: 'A small weather application featuring the ability to find weather and 5-day forecasts for multiple cities of choosing. This application makes use of the OpenWeatherAPI for live weather data.',
    technologies: 'JavaScript, Bootstrap, API',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },
  {
    id: 'any-eats',
    label: ['gatsby', 'stripe', 'shopify'],
    img: any_eats,
    url: 'https://kristin-serverless-store.netlify.app/',
    repo: '',
    title: 'Any Eats',
    features: 'Gatsby powered Stripe integrated simple single page e-commerce website.',
    technologies: 'JavaScript, Gatsby, Stripe',
    tutorial: {
      author: null,
      link: null,
      review: {
        comments: '',
        stars: null
      }
    },
  },
    {
      id: 'lyrics-search-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/yssImRk.png',
      alt: 'Image of Lyrics Search app',
      caption: 'Lyrics Searching App  ',
      title: 'Lyrics Search',
      info:
        '',
      info2:
        '',
      features:
        'Search for the lyrics of your favorite song.',
      technologies: 
        'HTML, CSS, JavaScript, API',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        '',
      learnedFront:
        'Pagination.',
      learnedBack:
        'Using an event listener to cycle through the search results pagination index via the API.',
      url: 'https://loveliiivelaugh.github.io/lyricsSearchJS/',
      repo: 'https://github.com/mwoodward1990/lyricsSearchJS', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/LEknxJx.png',
      gif: "",
    tutorial: {
      author: 'Brad Traversy',
      link: 'https://www.udemy.com/course/web-projects-with-vanilla-javascript/',
      review: {
        comments: '',
        stars: 5
      }
    },
      dateCompleted: '',
      description: 'Basic app built using vanilla Javascript and a lyrics searching API. Would like to integrate an additional API to source sheet music and/or tabs for Piano and Guitar. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/lyricsSearchJS/',
      github: 'https://github.com/mwoodward1990/lyricsSearchJS',
    },
    {
      id: 'typing-game-vanilla',
      label: 'vanilla',
      img: 'https://i.imgur.com/aNxj0Bs.png',
      alt: '',
      caption: '',
      title: 'Typing Game',
      info:
        '',
      info2:
        '',
      features:
      'This is a small typing game. Will add an API to dynamically bring in new words in addition to some extra functions distributing those words into seperate categories by their defined difficulties.',
      technologies: 
        'HTML, CSS, JavaScript, Wordpress, PHP',
      likes: '',
      likesNotUsedYet: // This is not in use at the moment
        '',
      learnedFront:
        '',
      learnedBack:
        'Using setTimeout()',
      url: 'https://loveliiivelaugh.github.io/typingGameJS/',
      repo: 'https://github.com/mwoodward1990/typingGameJS', // if no repo, the button will not show up
      key: "6",
      src: 'https://i.imgur.com/aNxj0Bs.png',
      gif: "",
      tutorial: {
        author: 'Brad Traversy',
        link: 'https://www.udemy.com/course/web-projects-with-vanilla-javascript/',
        review: {
          comments: '',
          stars: 5
        }
      },
      description: 'This is a small typing game. Will add an API to dynamically bring in new words in addition to some extra functions distributing those words into seperate categories by their defined difficulties. Following a tutorial by Brad Traversy.',
      link: 'https://loveliiivelaugh.github.io/typingGameJS/',
      github: 'https://github.com/mwoodward1990/typingGameJS',
    },
];