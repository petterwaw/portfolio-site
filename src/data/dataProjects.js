import { faJs, faReact, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import colorSchemeGenerator from "../assets/images/colorSchemeGenerator.png";
import orderingApp from "../assets/images/orderingApp.png";
import quiz from "../assets/images/quiz.png";
import watchlist from "../assets/images/watchlist.png";

export const projects = [
    {
        id: 1,
        title: "Ordering App",
        image: orderingApp,
        description: `Users can add and remove items from the cart, 
        submit a form, and see the total price update dynamically.
        Built to practice DOM manipulation, user interactions, and working with application state.`,
        techStack: [faJs, faHtml5, faCss3Alt],
        gitLink: "https://github.com/petterwaw/ordering_app",
        pageLink: "https://superb-narwhal-551185.netlify.app"
    },
    {
        id: 2,
        title: "Color Scheme Generator",
        image: colorSchemeGenerator,
        description: `A web application that generates custom color palettes based 
            on user input. The app fetches data from an external color API and 
            dynamically displays the selected color scheme. Users can easily 
            copy HEX codes for use in their own projects.
            While building this project, I practiced working 
            with APIs, handling asynchronous JavaScript (fetch), 
            processing JSON data, and dynamically updating the UI based on API responses.`,
        techStack: [faJs, faHtml5, faCss3Alt],
        gitLink: "https://github.com/petterwaw/color-scheme-generator",
        pageLink: "https://aesthetic-pasca-1efee9.netlify.app"
    },
    {
        id: 3,
        title: "Watchlist",
        image: watchlist,
        description: `A web application that allows users to search for movies, 
            add them to a watchlist list which are saved in local storage. 
            The app uses the OMDb API to fetch movie data and updates the 
            interface dynamically based on user actions.
            In this project, I worked with a third-party API, 
            handled asynchronous JavaScript with fetch, 
            and managed persistent data using local storage.`,
        techStack: [faJs, faHtml5, faCss3Alt],
        gitLink: "https://github.com/petterwaw/films-watchlist",
        pageLink: "https://peaceful-biscotti-de0490.netlify.app"
    },
    {
        id: 4,
        title: "Quiz App",
        image: quiz,
        description: `A quiz application built with React that fetches 
            questions from an external API and displays them dynamically. 
            The app tracks user answers, calculates the final score, 
            and ensures smooth state updates throughout the quiz flow.
            While building this project, I worked with React hooks, 
            API integration, asynchronous data fetching, 
            and managing application state to keep the UI synchronized with user actions.`,
        techStack: [faReact, faJs, faHtml5, faCss3Alt],
        gitLink: "https://github.com/petterwaw/quiz-app-in-react",
        pageLink: "https://dulcet-lolly-78bb72.netlify.app"
    },
];