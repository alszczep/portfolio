import React, { FC, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Links from "./nav/Links";
import { AiOutlineMenu } from 'react-icons/ai';



const Nav: FC = (): JSX.Element => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLElement>(null);
    const mobileNavHandler = () => {
        if(navRef && navRef.current){
            if(isNavOpen) navRef.current.classList.add('active');
            else navRef.current.classList.remove('active');
        }
    }
    useEffect(() => {
        mobileNavHandler();
    })
    if(isMobile)
        return (<nav className='mobileNavigation' ref={navRef}>
            <AiOutlineMenu color='white' onClick={() => { setIsNavOpen(!isNavOpen) }}/>
            <section className='linksWrapper' onClick={() => { setIsNavOpen(!isNavOpen) }}>
                <Links/>
            </section>
        </nav>)
    return (<nav className='navigation'>
        <Links/>
    </nav>)
}

export default Nav;