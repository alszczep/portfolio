import React, { FC } from "react";
import { skillsData } from "../data/skillsData";
import IconBox from "./skills/IconBox";

const Skills: FC = (): JSX.Element => {
    return (
        <main 
            className='main skills'>
            {
                skillsData.map((item) => {
                    return <IconBox key={item.name} item={item}/>;
                })
            }
        </main>
    )
}

export default Skills;