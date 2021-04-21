import React, { FC, useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { ProjectInterface } from "../interfaces/ProjectInterface";
import { resizeHandler } from "../modules/main-resize-handler";
import ProjectsDesc from "./projects/ProjectsDesc";
import ProjectsSlider from "./projects/ProjectsSlider";

const Projects: FC<any> = (): JSX.Element => {
    const projectsCount = projectsData.length;
    const [projectId, setProjectId] = useState(0);
    const [projectsList, setProjectsList] = useState<ProjectInterface[]>(projectsData);
    useEffect(() => {
        resizeHandler();
    })
    return (
        <main 
            className='main projects'>
            <ProjectsSlider 
                setProjectId={setProjectId} 
                projectsList={projectsList} 
                setProjectsList={setProjectsList} 
                projectsCount={projectsCount}/>
            <ProjectsDesc 
                project={projectsData[projectId]}/>
        </main>
    )
}

export default Projects;