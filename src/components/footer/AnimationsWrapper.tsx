import React, { FC, useContext, useEffect, useRef } from "react";
import { AnimationsContext, LangContext } from '../../App';

const AnimationsWrapper: FC<any> = (): JSX.Element => {
    const animations = useContext(AnimationsContext)?.animations;
    const setAnimations = useContext(AnimationsContext)?.setAnimations;
    const footer = useContext(LangContext)?.data?.footer;
    const checkBoxRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(localStorage.getItem('animations') && checkBoxRef && checkBoxRef.current)
            checkBoxRef.current.checked = animations;
    }, [animations])
    return (
        <section 
            className='animations-wrapper'>
            <label 
                className='animations-wrapper__animations-label' 
                htmlFor='animations' 
                onClick={() => {setAnimations(!animations)}}>
                {footer?.animations}
            </label>
            <input 
                className='animations-wrapper__animations-check-box' 
                type='checkbox' 
                value='animations' 
                name='animations' 
                ref={checkBoxRef} 
                onClick={() => {setAnimations(!animations)}}/>
        </section>
    )
}

export default AnimationsWrapper;