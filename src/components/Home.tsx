import React, { FC, useContext } from "react";
import { isMobile } from "react-device-detect";
import { LangContext } from './../App';

const Home: FC = (): JSX.Element => {
    const { mainPage } = useContext(LangContext).data;
    return (<main className='mainPage'>
        <h1>{mainPage.title}</h1>
        <h2>{mainPage.desc}</h2>
        <h6>{isMobile? 'Swipe to move between pages': ''}</h6>
    </main>)
}

export default Home;