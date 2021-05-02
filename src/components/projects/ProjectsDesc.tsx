import { FC, useContext } from "react";
import { LangContext } from "../../App";
import { ProjectInterface } from "../../interfaces/ProjectInterface";
import ProjectLink from "./ProjectLink";
import TechBox from "./TechBox";

const ProjectsDesc: FC<{ project: ProjectInterface }> = ({ project }): JSX.Element => {
    const lang = useContext(LangContext)?.lang;
    return (
        <section 
            className='description'>
            <h1 
                className='description__name'>
                {project?.name}
            </h1>
            <section 
                className='description__section description__section--left'>
                {
                    lang === 'pl'? 
                    project?.descPl: 
                    project?.descEng
                }
            </section>
            <section 
                className='description__section description__section--right'>
                <img 
                    className='description__image'
                    src={project?.image} 
                    alt={project?.name}/>
                <section 
                    className='description__tech'>
                    {
                        project?.tech?.map((item: string, index: number) => {
                            return (
                                <TechBox 
                                    key={index + 1000} 
                                    tech={item}/>
                            );
                        })
                    }
                </section>
                <section 
                    className='description__links'>
                    {
                        project?.github? 
                        <ProjectLink 
                            type={'github'} 
                            link={project?.github}/>: 
                        ''
                    }
                    {
                        project?.demo? 
                        <ProjectLink 
                            type={'demo'} 
                            demoType={project?.demoType}
                            link={project?.demo}/>: 
                        ''
                    }
                </section>
            </section>
        </section>
    )
}

export default ProjectsDesc;