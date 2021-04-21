import React, { FC, useContext, useRef } from "react";
import { clickHandler } from "../../modules/skills/click-handler";
import { mouseEnterHandler } from "../../modules/skills/mouse-enter-handler";
import { mouseLeaveHandler } from "../../modules/skills/mouse-leave-handler";
import { AnimationsContext } from './../../App';

const IconBox: FC<any> = (props): JSX.Element => {
    const iconRef = useRef<HTMLElement>(null);
    const animations = useContext(AnimationsContext)?.animations;
    return (
        <section 
            className='skills__icon'
            ref={iconRef} 
            onClick={() => clickHandler(iconRef, animations)} 
            onMouseEnter={() => mouseEnterHandler(iconRef, animations)} 
            onMouseLeave={() => mouseLeaveHandler(iconRef)}>
            {
                props.item.iconType === 'custom'? 
                <img src={props.item.icon} alt={props.item.name}/>:
                <props.item.icon color={props.item.iconColor} style={props.item.style}/>
            }
        </section>
    )
}

export default IconBox;