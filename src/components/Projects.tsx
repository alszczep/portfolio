import React, { FC, useContext, useEffect, useRef } from "react";
import { projectsData } from "../data/projectsData";
import ProjectsDesc from "./projects/ProjectsDesc";
import ProjectsSlider from "./projects/ProjectsSlider";

const mainMargin = 15;

const Projects: FC<any> = (): JSX.Element => {
    const resizeHandler = () => {
        if(document.getElementsByTagName('main')[0]){
            let projectsPageElement = document.getElementsByTagName('main')[0];
            let rootHeight = document.getElementById('root')!.clientHeight;
            let rootWidth = document.getElementById('root')!.clientWidth;
            let navHeight = document.getElementsByClassName('navigation')[0].clientHeight;
            let footerHeight = document.getElementsByClassName('footer')[0].clientHeight;
            projectsPageElement.style.height = `${rootHeight - navHeight - footerHeight - mainMargin * 2}px`;
            projectsPageElement.style.margin = `${mainMargin}px`;
            projectsPageElement.style.marginTop = `${navHeight - footerHeight + mainMargin}px`;
            projectsPageElement.style.width = `${rootWidth - mainMargin * 2}px`;
        }
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
    }, []);
    useEffect(() => {
        resizeHandler();
    })
    return (<main className='projectsPage'>
        <ProjectsSlider/>
        <ProjectsDesc/>
    </main>)
}

export default Projects;