import React, { FC } from "react";
import { SiNetlify, SiGithub } from 'react-icons/si';

const ProjectLink: FC<any> = (props): JSX.Element => {
    return (<a className={`projectLink ${props.type}Link`} href={props.link} target='_blank' rel='noreferrer'>
        {props.type === 'github'? <SiGithub color='white'/>: <SiNetlify color='rgb(54,178,187)'/>}
        <h1>{props.type}</h1>
    </a>)
}

export default ProjectLink;