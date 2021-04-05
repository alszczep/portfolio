import { SiTypescript, SiReact, SiJest, SiJavascript, SiGit} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import html5 from './../images/skill-icons/html5.svg';
import css3 from './../images/skill-icons/css3.svg';
import mysql from './../images/skill-icons/mysql.svg';
import vscode from './../images/skill-icons/vscode.svg';
export const skillsData = [
    {
        name: 'HTML5',
        icon: html5,
        iconColor: 'rgb(240,100,40)',
        iconType: 'custom',
        style: {}
    },
    {
        name: 'CSS3',
        icon: css3,
        iconColor: 'rgb(39,169,224)',
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
        style: {background: 'black'}
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        iconColor: 'rgb(0,122,204)',
        iconType: 'react-icon',
        style: {background: 'white'}
    },
    {
        name: 'React',
        icon: SiReact,
        iconColor: 'rgb(97,218,251)',
        iconType: 'react-icon',
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
        name: 'MySql',
        icon: mysql,
        iconColor: 'rgb(1,99,138)',
        iconType: 'custom',
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
        iconColor: 'rgb(13,134,209)',
        iconType: 'custom',
        style: {}
    }
]