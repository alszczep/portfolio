import ase from './../images/ase.JPG';

export const projectsData = [
    {
        id: 0,
        name: 'Forum',
        descPl: `W tym projekcie jestem odpowiedzialny za front-end. Jest to proste forum dyskusyjne z możliwością dodawnia postów i komentarzy do nich. 
        Forum posiada możliwość założenia konta oraz zarządzania dodanymi przez użytkownika tego konta. Projekt jest wciąż w budowie.`,
        descEng: `In this project I am resposible for front-end. It's a simple discussion forum, where you can publish posts and comment on them.
        You can also create an account in order to manage your posts.`,
        tech: [
            'React',
            'TypeScript',
            'Sass',
            'Jest'
        ],
        image: ase, 
        github: 'https://github.com/alszczep/forum',
        demo: ''
    },
    {
        id: 1,
        name: 'Anime search engine',
        descPl: `Wyszukiwarka pozwalająca na wyszukiwanie anime w bazie dostarczanej przez Jikan API. Wyniki wyświetlane są w postaci kart z odpowiednim obrazkiem i nazwą.
        Po kliknięciu na kartę zostajemy przeniesieni do podstrony zwierającej informacje na temat wybranej animacji, takie jak krótki opis, lista odcinków, długość trwania, czy ocena.`,
        descEng: 'eng',
        tech: [
            'React',
            'JavaScript',
            'Sass'
        ],
        image: ase, 
        github: 'https://github.com/alszczep/anime-search-engine',
        demo: 'https://alszczep-anime-search-engine.netlify.app/'
    },
    {
        id: 2,
        name: 'Chess',
        descPl: 'pl',
        descEng: 'eng',
        tech: [
            'JavaScript',
            'Sass'
        ],
        image: ase, 
        github: 'https://github.com/alszczep/chess',
        demo: 'https://alszczep-chess.netlify.app'
    },
    {
        id: 3,
        name: 'Portfolio',
        descPl: 'pl',
        descEng: 'eng',
        tech: [
            'React',
            'TypeScript',
            'Sass'
        ],
        image: ase, 
        github: 'https://github.com/alszczep/portfolio',
        demo: ''
    }
]