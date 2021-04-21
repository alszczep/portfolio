import React, { FC } from "react";
import ExternalLinks from './footer/ExternalLinks';
import LangImages from './footer/LangImages';
import AnimationsWrapper from './footer/AnimationsWrapper';

const Footer: FC<any> = (props): JSX.Element => {
    return (
        <footer 
            className='footer'>
            <AnimationsWrapper 
                setAnimations={props.setAnimations} 
                animations={props.animations}/>
            <ExternalLinks/>
            <LangImages 
                setLang={props.setLang}/>
        </footer>
    )
}

export default Footer;