import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../App";

const Nav: FC = (): JSX.Element => {
    const { nav } = useContext(LangContext).data;
    return (<nav className='navigation'>
        <Link to='/'>{nav.home}</Link>
        <Link to='/skills'>{nav.skills}</Link>
        <Link to='/projects'>{nav.projects}</Link>
        <Link to='/contact'>{nav.contact}</Link>
    </nav>)
}

export default Nav;