import React, { FC, useEffect, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ProjectsSlider: FC<any> = (props): JSX.Element => {
    const [currentImage, setCurrentImage] = useState<HTMLImageElement>();
    const chevronHandler = (direction: string) => {
        let newProjectsList
        switch(direction){
            case 'left':
                newProjectsList = props.projectsList.map((item: any, index: number) => {
                    if(index < props.projectsCount - 1)
                        return item;
                    return null;
                });
                newProjectsList.unshift(props.projectsList[props.projectsCount - 1])
                props.setProjectsList(newProjectsList.slice(0, props.projectsCount));
                break;
            case 'right':
                newProjectsList = props.projectsList.map((item: any, index: number) => {
                    if(index > 0)
                        return item;
                    return null;
                });
                newProjectsList.push(props.projectsList[0])
                props.setProjectsList(newProjectsList.slice(1, props.projectsCount + 1));
                break;
        }
    }
    const imageHandler = (id: number) => {
        return (event: any) => {
            props.setProjectId(id);
            currentImage?.classList.remove('currentProject');
            event.target.classList.add('currentProject');
            setCurrentImage(event.target);
        } 
    }
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
        <VscChevronLeft onClick={() => {chevronHandler('left')}}/>
        <section className='projectsList'>
            {props.projectsList.map((item: any) => {
                return <img key={item.id} src={item.image} alt={item.id} onClick={imageHandler(item.id)}/>
            })}
        </section>
        <VscChevronRight onClick={() => {chevronHandler('right')}}/>
    </section>)
}

export default ProjectsSlider;