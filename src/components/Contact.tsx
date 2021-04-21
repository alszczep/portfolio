import React, { FC, useContext, useEffect, useReducer, useState } from "react";
import { resizeHandler } from "../modules/main-resize-handler";
import { LangContext } from "../App";
import { formInitialState, formReducer } from "../modules/form-reducer";
import { FormStatusInterface } from "../interfaces/FormStatusInterface";
import { refreshPage } from "../modules/contact/refresh-page";
import { submitHandler } from "../modules/contact/submit-handler";

const Contact: FC<any> = (props): JSX.Element => {
    const langData = useContext(LangContext)?.data?.contactPage;
    const [formState, formDispatch] = useReducer(formReducer, formInitialState);
    const [formStatus, setFormStatus] = useState<FormStatusInterface>();
    useEffect(() => {
        resizeHandler();
    })
    if(formStatus?.text)
        return(
            <main 
                className='main contact'>
                <h2 
                    className='contact__status-text'>
                    {formStatus.text}
                </h2>
                <button 
                    className='contact__button' 
                    onClick={refreshPage(formStatus, formDispatch, setFormStatus)}>
                    {langData.refresh}
                </button>
            </main>
        );
    return (
        <main 
            className='main contact'>
            <form 
                className='contact__form'
                name='contact' 
                method='post' 
                data-netlify='true' 
                data-netlify-honeypot='bot-field' 
                onSubmit={submitHandler(setFormStatus, formState, langData)}>
                <input 
                    type='hidden' 
                    name='form-name' 
                    value='contact'/>
                <div 
                    hidden>
                    <input
                        name='bot-field'/>
                </div>
                <h1 
                    className='contact__header'>
                    {langData?.contact}
                </h1>
                <input 
                    className='contact__form-element contact__form-element--input contact__form-element--first-name'
                    type='text' 
                    name='firstName' 
                    placeholder={langData?.firstName}
                    value={formState.firstName} 
                    onChange={(event: any) => { formDispatch({type: 'UPDATE_FIRST_NAME', payload: event.target.value}) }}/>
                <input 
                    className='contact__form-element contact__form-element--input contact__form-element--last-name'
                    type='text' 
                    name='lastName' 
                    placeholder={langData?.lastName}
                    value={formState.lastName} 
                    onChange={(event: any) => { formDispatch({type: 'UPDATE_LAST_NAME', payload: event.target.value}) }}/>
                <input 
                    className='contact__form-element contact__form-element--input contact__form-element--email'
                    type='email' 
                    name='email' 
                    placeholder='Email'
                    value={formState.email} 
                    onChange={(event: any) => { formDispatch({type: 'UPDATE_EMAIL', payload: event.target.value}) }}/>
                <textarea 
                    className='contact__form-element contact__form-element--textarea contact__form-element--message'
                    name='message' 
                    placeholder={langData?.message}
                    value={formState.message} 
                    onChange={(event: any) => { formDispatch({type: 'UPDATE_MESSAGE', payload: event.target.value}) }}>
                </textarea>
                <button 
                    className='contact__form-element contact__form-element--button contact__form-element--submit contact__button'
                    type='submit'>
                    {langData?.send}
                </button>
            </form>
        </main>
    )
}

export default Contact;
