import React, { FC, useContext, useRef } from "react";
import { skillsData } from "../data/skillsData";
import { LangContext } from './../App';
import IconBox from "./IconBox";

const Skills: FC = (): JSX.Element => {
    return (<main className='skillsPage'>
        {skillsData.map((item) => {
            return <IconBox key={item.name} item={item}/>;
        })}
    </main>)
}

export default Skills;