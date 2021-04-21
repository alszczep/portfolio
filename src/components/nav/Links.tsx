import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "./../../App";

const Links: FC<{device: string}> = ({device}): JSX.Element => {
    const nav = useContext(LangContext)?.data?.nav;
    return (
    <>
        <Link 
            className={`navigation__link ${device}-navigation__link`} 
            to='/'>
            {nav?.home}
        </Link>
        <Link 
            className={`navigation__link ${device}-navigation__link`} 
            to='/skills'>
            {nav?.skills}
        </Link>
        <Link 
            className={`navigation__link ${device}-navigation__link`} 
            to='/projects'>
            {nav?.projects}
        </Link>
        <Link 
            className={`navigation__link ${device}-navigation__link`} 
            to='/contact'>
            {nav?.contact}
        </Link>
    </>
    )
}

export default Links;