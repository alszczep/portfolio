import { FC, useEffect, useRef, useState } from "react";
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
        return (
            <nav 
                className='navigation mobile-navigation' 
                ref={navRef}>
                <AiOutlineMenu 
                    className='mobile-navigation__menu-icon' 
                    color='white' 
                    onClick={() => { setIsNavOpen(!isNavOpen) }}/>
                <section 
                    className='mobile-navigation__links-wrapper' 
                    onClick={() => { setIsNavOpen(!isNavOpen) }}>
                    <Links 
                        device={'mobile'}/>
                </section>
            </nav>
        )
    return (
        <nav 
            className='navigation desktop-navigation'>
            <Links 
                device={'desktop'}/>
        </nav>
    )
}

export default Nav;