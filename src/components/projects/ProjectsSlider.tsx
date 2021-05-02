import { FC, useEffect, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { imageHandler } from "../../modules/projects/image-handler";
import { chevronHandler } from './../../modules/projects/chevron-handler';

const ProjectsSlider: FC<any> = ({ setProjectId, projectsList, setProjectsList, projectsCount }): JSX.Element => {
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
    return (
        <section 
            className='slider'>
            <VscChevronLeft 
                className='slider__chevron slider__chevron--left'
                onClick={() => {chevronHandler('left', setProjectsList, projectsList, projectsCount)}}/>
            <section 
                className='slider__list'>
                {
                    projectsList?.map((item: any) => {
                        return (
                            <section
                                className='slider__list-item'
                                onClick={imageHandler(item.id, setProjectId, currentImage, setCurrentImage)}
                                key={item.name}>
                                <img 
                                    className='slider__list-image'
                                    src={item.image} 
                                    alt={item.name}/>
                                <section
                                    className='slider__list-label'>
                                    {item.name}
                                </section>
                            </section>
                        )
                    })
                }
            </section>
            <VscChevronRight 
                className='slider__chevron slider__chevron--right'
                onClick={() => {chevronHandler('right', setProjectsList, projectsList, projectsCount)}}/>
        </section>
    )
}

export default ProjectsSlider;