import React, { FC, useContext, useRef } from "react";
import { AnimationsContext } from './../../App';

const IconBox: FC<any> = (props): JSX.Element => {
    const iconRef = useRef<HTMLElement>(null);
    const animations = useContext(AnimationsContext);
    const clickHandler = () => {
        if(animations && !iconRef.current?.classList.contains('active')){
            iconRef.current?.classList.add('active');
            setTimeout(() => {
                iconRef.current?.classList.remove('active');
            }, 500);
        }
    }
    const mouseEnterHandler = () => {
        if(animations && !iconRef.current?.classList.contains('zoom')){
            iconRef.current?.classList.add('zoom');
        }
    }
    const mouseLeaveHandler = () => {
        iconRef.current?.classList.remove('zoom');
    }
    return (<section className='skillIcon' ref={iconRef} onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <props.item.icon color={props.item.iconColor}/>
    </section>)
}

export default IconBox;