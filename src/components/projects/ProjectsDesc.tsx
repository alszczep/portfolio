import React, { FC, useContext } from "react";
import { LangContext } from "../../App";
import ProjectLink from "./ProjectLink";
import TechBox from "./TechBox";

const ProjectsDesc: FC<any> = (props): JSX.Element => {
    const { lang } = useContext(LangContext);
    return (<section className='projectsDesc'>
        <h1 className='projectName'>{props.project.name}</h1>
        <section className='projectLeft'>
            {lang === 'pl'? props.project.descPl: props.project.descEng}
        </section>
        <section className='projectRight'>
            <img src={props.project.image} alt='props.project.id'/>
            <section className='projectTech'>
                {props.project.tech.map((item: string, index: number) => {
                    return <TechBox key={index + 1000} tech={item}/>;
                })}
            </section>
            <section className='gitAndDemo'>
                {props.project.github? <ProjectLink type={'github'} link={props.project.github}/>: ''}
                {props.project.demo? <ProjectLink type={'demo'} link={props.project.demo}/>: ''}
            </section>
        </section>
    </section>)
}

export default ProjectsDesc;