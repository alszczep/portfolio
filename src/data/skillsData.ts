import { SiTypescript, SiReact, SiJest, SiJavascript, SiGit, SiNodeDotJs } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import html5 from './../images/skill-icons/html5.svg';
import css3 from './../images/skill-icons/css3.svg';
import mysql from './../images/skill-icons/mysql.svg';
import vscode from './../images/skill-icons/vscode.svg';
import postgresql from './../images/skill-icons/postgresql.svg';
export const skillsData = [
    {
        name: 'HTML5',
        icon: html5,
        iconType: 'custom',
        style: {}
    },
    {
        name: 'CSS3',
        icon: css3,
        iconType: 'custom',
        style: {}
    },
    {
        name: 'SASS',
        icon: FaSass,
        iconColor: 'rgb(206,103,154)',
        iconType: 'react-icon',
        style: {}
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        iconColor: 'rgb(247,224,24)',
        iconType: 'react-icon',
        style: { backgroundColor: 'black' }
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        iconColor: 'rgb(0,122,204)',
        iconType: 'react-icon',
        style: { backgroundColor: 'white' }
    },
    {
        name: 'React',
        icon: SiReact,
        iconColor: 'rgb(97,218,251)',
        iconType: 'react-icon',
        style: {}
    },
    {
        name: 'Node',
        icon: SiNodeDotJs,
        iconColor: 'rgb(104,180,99)',
        iconType: 'react-icon',
        style: {}
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
        iconType: 'custom',
        style: {}
    },
    {
        name: 'MySQL',
        icon: mysql,
        iconType: 'custom',
        style: {}
    },
    {
        name: 'Jest',
        icon: SiJest,
        iconColor: 'rgb(153,66,91)',
        iconType: 'react-icon',
        style: {}
    },
    {
        name: 'Git',
        icon: SiGit,
        iconColor: 'rgb(240,81,51)',
        iconType: 'react-icon',
        style: {}
    },
    {
        name: 'Visual Studio Code',
        icon: vscode,
        iconType: 'custom',
        style: {}
    }
]