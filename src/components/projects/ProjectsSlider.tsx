import React, { FC, useEffect, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { imageHandler } from "../../modules/projects/image-handler";
import { chevronHandler } from './../../modules/projects/chevron-handler';

const ProjectsSlider: FC<any> = (props): JSX.Element => {
    const [currentImage, setCurrentImage] = useState<HTMLImageElement>();
    useEffect(() => {
        if(!currentImage){
            let firstImage = document.getElementsByTagName('img');
            if(firstImage.length > 0){
                firstImage[0].classList.add('currentProject');
                setCurrentImage(firstImage[0]);
            }
        }    
    }, [currentImage]);
    return (<section className='projectsSlider'>
        <VscChevronLeft onClick={() => {chevronHandler('left', props.setProjectsList, props.projectsList, props.projectsCount)}}/>
        <section className='projectsList'>
            {props.projectsList?.map((item: any) => {
                return <img key={item.id} src={item.image} alt={item.id} onClick={imageHandler(item.id, props.setProjectId, currentImage, setCurrentImage)}/>
            })}
        </section>
        <VscChevronRight onClick={() => {chevronHandler('right', props.setProjectsList, props.projectsList, props.projectsCount)}}/>
    </section>)
}

export default ProjectsSlider;