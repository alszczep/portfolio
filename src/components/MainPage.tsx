import React, { FC, useContext } from "react";
import { LangContext } from './../App';

const MainPage: FC = (): JSX.Element => {
    const { mainPage } = useContext(LangContext);
    return (<main className='mainPage'>
        <h1>{mainPage.title}</h1>
        <h2>{mainPage.desc}</h2>
    </main>)
}

export default MainPage;