import pl_flag from './../images/pl_flag.svg';
import uk_flag from './../images/uk_flag.svg';
import React, { FC, useContext, useEffect, useRef } from "react";
import { SiGithub } from 'react-icons/si';
import { LangContext } from '../App';

const Footer: FC<any> = (props): JSX.Element => {
    const { footer } = useContext(LangContext).data;
    const checkBoxRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if(localStorage.getItem('animations') && checkBoxRef && checkBoxRef.current)
            checkBoxRef.current.checked = props.animations;
    }, [props])
    return (<footer className='footer'>
        <section className='animationsWrapper'>
            <label className='animationsLabel' htmlFor='animations' onClick={() => {props.setAnimations(!props.animations)}}>{footer.animations}</label>
            <input className='animationsCheckBox' type='checkbox' value='animations' name='animations' ref={checkBoxRef} onClick={() => {props.setAnimations(!props.animations)}}/>
        </section>
        <section className='externalLinks'>
            <a target='_blank' rel='noreferrer' href='https://github.com/alszczep'><SiGithub color='white'/></a>
        </section>
        <section className='langImages'>
            <img src={uk_flag} alt='eng' onClick={() => {props.setLang('eng')}}/>
            <img src={pl_flag} alt='pl' onClick={() => {props.setLang('pl')}}/>
        </section>
    </footer>)
}

export default Footer;