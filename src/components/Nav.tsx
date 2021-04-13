import React, { FC, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Links from "./nav/Links";
import { AiOutlineMenu } from 'react-icons/ai';
import { mobileNavHandler } from "../modules/mobile-nav-handler";

const Nav: FC = (): JSX.Element => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        mobileNavHandler(navRef, isNavOpen);
    }, [isNavOpen])
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