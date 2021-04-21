import React, { FC } from "react";
import { SiNetlify, SiGithub } from 'react-icons/si';

const ProjectLink: FC<any> = (props): JSX.Element => {
    return (
        <a 
            className={`description__link description__link--${props.type}`} 
            href={props.link} 
            target='_blank' 
            rel='noreferrer'>
            {
                props.type === 'github'? 
                <SiGithub
                    className='description__link-icon description__link-icon--github'
                    color='white'/>: 
                <SiNetlify 
                    className='description__link-icon description__link-icon--demo'
                    color='rgb(54,178,187)'/>
            }
            <h1 
                className='description__link-name'>
                {props.type}
            </h1>
        </a>
    )
}

export default ProjectLink;