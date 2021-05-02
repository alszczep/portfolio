import { FC } from "react";
import { SiNetlify, SiGithub, SiHeroku } from 'react-icons/si';
import { ProjectLinkPropsInterface } from "../../interfaces/props/ProjectLinkPropsInterface";

const ProjectLink: FC<ProjectLinkPropsInterface> = ({ type, demoType, link }): JSX.Element => {
    return (
        <a 
            className={`description__link description__link--${type}`} 
            href={link} 
            target='_blank' 
            rel='noreferrer'>
            {
                type === 'github'? 
                    <SiGithub
                        className='description__link-icon description__link-icon--github'
                        color='white'/>: 
                    demoType === 'netlify'?
                        <SiNetlify 
                            className='description__link-icon description__link-icon--demo'
                            color='rgb(54,178,187)'/>:
                        <SiHeroku 
                            className='description__link-icon description__link-icon--demo'
                            color='white'/>
            }
            <h1 
                className='description__link-name'>
                {type}
            </h1>
        </a>
    )
}

export default ProjectLink;