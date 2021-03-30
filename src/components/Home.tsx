import React, { FC, useContext } from "react";
import { LangContext } from './../App';

const Home: FC = (): JSX.Element => {
    const { mainPage } = useContext(LangContext).data;
    return (<main className='mainPage'>
        <h1>{mainPage.title}</h1>
        <h2>{mainPage.desc}</h2>
    </main>)
}

export default Home;