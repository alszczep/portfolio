import React, { FC, useContext } from "react";
import { isMobile } from "react-device-detect";
import { LangContext } from './../App';

const Home: FC = (): JSX.Element => {
    const mainPage = useContext(LangContext)?.data?.mainPage;
    return (
        <main 
            className='main home'>
            <h1 
                className='home__header home__header--first'>
                {mainPage?.title}
            </h1>
            <h2 
                className='home__header home__header--second'>
                {mainPage?.desc}
            </h2>
            <h6 
                className='home__header home__header--mobile'>
                {
                    isMobile? 
                    mainPage?.swipe: 
                    ''
                }
            </h6>
        </main>
    )
}

export default Home;