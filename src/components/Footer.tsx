import { FC } from "react";
import ExternalLinks from './footer/ExternalLinks';
import LangImages from './footer/LangImages';
import AnimationsWrapper from './footer/AnimationsWrapper';
import { FooterPropsInterface } from "../interfaces/props/FooterPropsInterface";

const Footer: FC<FooterPropsInterface> = ({ setLang, setAnimations, animations }): JSX.Element => {
    return (
        <footer 
            className='footer'>
            <AnimationsWrapper 
                setAnimations={setAnimations} 
                animations={animations}/>
            <ExternalLinks/>
            <LangImages 
                setLang={setLang}/>
        </footer>
    )
}

export default Footer;