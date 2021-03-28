import React, { FC, useContext, useEffect, useRef } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ProjectsSlider: FC<any> = (): JSX.Element => {
    return (<section className='projectsSlider'>
        <VscChevronLeft/>
        <VscChevronRight/>
    </section>)
}

export default ProjectsSlider;