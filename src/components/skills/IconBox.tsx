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
    console.log(props.item.icon);
    return (<section className='skillIcon' ref={iconRef} onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        {props.item.iconType === 'custom'? 
        <img src={props.item.icon} alt={props.item.name}/>:
        <props.item.icon color={props.item.iconColor} style={props.item.style}/>}
        
    </section>)
}

export default IconBox;