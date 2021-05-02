import forum from './../images/project-icons/forum.PNG';
import animelist from './../images/project-icons/animelist.PNG';
import chess from './../images/project-icons/chess.PNG';
import portfolio from './../images/project-icons/portfolio.PNG';

export const projectsData = [
    {
        id: 0,
        name: 'Anime list',
        descPl: `Aplikacja pozwala na wyszukiwanie anime w bazie dostarczanej przez Jikan API. Wyniki wyświetlane są w postaci kart z odpowiednim obrazkiem i nazwą.
        Po kliknięciu na kartę zostajemy przeniesieni do podstrony zwierającej informacje na temat wybranej animacji, takie jak krótki opis, lista odcinków, długość trwania, czy ocena.
        Aplikacja dostarcza także możliwość założenia konta oraz dodawnia ulubionych anime do swojej listy.`,
        descEng: `The application lets users search for animes among the data delivered by the Jikan API. 
        Results are displayed in form of cards, which contain corresponding images and titles. 
        By click on the card, the user can go to a subpage, where he can see more details about the chosen animation, such as short description, episode list, duration, or rating.
        The user can also create an account, and add favourite animes to his list.`,
        tech: [
            'React',
            'TypeScript',
            'Sass',
            'Node',
            'Express',
            'PostgreSQL',
            'Jest'
        ],
        image: animelist, 
        github: 'https://github.com/alszczep/anime-list',
        demo: 'https://al-szczep-anime-list.herokuapp.com/',
        demoType: 'heroku'
    },
    {
        id: 1,
        name: 'Forum',
        descPl: `W tym projekcie jestem odpowiedzialny za front-end. Jest to proste forum dyskusyjne z możliwością dodawnia postów i komentarzy do nich. 
        Forum posiada możliwość założenia konta oraz zarządzania dodanymi przez użytkownika tego konta. Projekt jest wciąż w budowie.`,
        descEng: `In this project, I am responsible for the front-end. It's a simple discussion forum, where you can publish posts and comment on them.
        You can also create an account to manage your posts.`,
        tech: [
            'React',
            'TypeScript',
            'Sass',
            'Jest'
        ],
        image: forum, 
        github: 'https://github.com/alszczep/forum',
        demo: '',
        demoType: 'netlify'
    },
    {
        id: 2,
        name: 'Portfolio',
        descPl: `To jest projekt, który właśnie oglądasz. 
        Zwiera informacje na temat posiadanych przeze mnie umiejętności, wykonanych projektów oraz pozwala na skontaktowanie się ze mną z użyciem formularza.
        Strona może być wyświetlana w dwóch językach, polskim i angielskim. 
        Animowane tło zostało wykonane z użyciem Vanta.js, animacje można wyłączyć odznaczając odpowiednie pole w dolnej części strony.`,
        descEng: `This is the project, that you are currently looking at. 
        It contains information about my skills, projects that I created and it lets you contact me using the contact form. 
        The website can be displayed in two languages, Polish and English. 
        The animated background was created using Vanta.js, animations can be turned off by unchecking the corresponding check box in the footer.`,
        tech: [
            'React',
            'TypeScript',
            'Sass',
            'Jest'
        ],
        image: portfolio, 
        github: 'https://github.com/alszczep/portfolio',
        demo: '',
        demoType: 'netlify'
    },
    {
        id: 3,
        name: 'Chess',
        descPl: `Jest to prosty silnik szachowy, pozwalający na rogrywanie gry między użytkownikami na jednym urządzeniu. 
        Gra obsługuje zaawansowane ruchy, takie jak roszada, czy bicie w przelocie. W menu ustawień możemy także zobaczyć historię ruchów wykonanych podczas rozgrywki.`,
        descEng: `It is a simple chess engine, which lets you play versus another player on the same device.
        The game supports complex moves, such as castle, or en passant. In the settings menu, you can also see the move history.`,
        tech: [
            'JavaScript',
            'Sass'
        ],
        image: chess, 
        github: 'https://github.com/alszczep/chess',
        demo: 'https://alszczep-chess.netlify.app',
        demoType: 'netlify'
    }
]