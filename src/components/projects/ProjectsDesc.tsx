import React, { FC, useContext } from "react";
import { LangContext } from "../../App";
import ProjectLink from "./ProjectLink";
import TechBox from "./TechBox";

const ProjectsDesc: FC<any> = (props): JSX.Element => {
    const lang = useContext(LangContext)?.lang;
    return (
        <section 
            className='description'>
            <h1 
                className='description__name'>
                {props?.project?.name}
            </h1>
            <section 
                className='description__section description__section--left'>
                {
                    lang === 'pl'? 
                    props?.project?.descPl: 
                    props?.project?.descEng
                }
            </section>
            <section 
                className='description__section description__section--right'>
                <img 
                    className='description__image'
                    src={props?.project?.image} 
                    alt={props?.project?.id}/>
                <section 
                    className='description__tech'>
                    {
                        props?.project?.tech?.map((item: string, index: number) => {
                            return <TechBox key={index + 1000} tech={item}/>;
                        })
                    }
                </section>
                <section 
                    className='description__links'>
                    {
                        props?.project?.github? 
                        <ProjectLink 
                            type={'github'} 
                            link={props?.project?.github}/>: 
                        ''
                    }
                    {
                        props?.project?.demo? 
                        <ProjectLink 
                            type={'demo'} 
                            link={props?.project?.demo}/>: 
                            ''
                    }
                </section>
            </section>
        </section>
    )
}

export default ProjectsDesc;