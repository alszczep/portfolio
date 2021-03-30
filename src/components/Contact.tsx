import React, { FC, useContext, useEffect, useReducer, useState } from "react";
import { resizeHandler } from "../modules/main-resize-handler";
import qs from 'qs';
import { LangContext } from "../App";
import { formInitialState, formReducer } from "../modules/form-reducer";

const Contact: FC<any> = (props): JSX.Element => {
    const lang = useContext(LangContext).lang;
    const [formState, formDispatch] = useReducer(formReducer, formInitialState);
    const [formStatus, setFormStatus] = useState<string>();
    useEffect(() => {
        resizeHandler();
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(window.location.href + "/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: qs.stringify({ "form-name": "contact", "firstName": formState.firstName, "lastName": formState.lastName, "email": formState.email, "message": formState.message})
        })
        .then(response => {
            if (response.status > 199 && response.status < 300){
                setFormStatus(lang === 'pl'? 'Wiadomość została wysłana': 'Message sent.');
            } else {
                setFormStatus(lang === 'pl'? 'Wystąpił błąd podczas wysyłania twojej wiadomości. Spróbuj ponownie.': 'An error occured while sending your message. Please try again.');
            } 
          })
        .catch(error => {setFormStatus(lang === 'pl'? 'Wystąpił błąd podczas wysyłania twojej wiadomości. Spróbuj ponownie.': 'An error occured while sending your message. Please try again.');});
    };
    if(formStatus)
        return(<main className='contactPage'>
            <h2 className='statusText'>{formStatus}</h2>
            <button className='statusButton' onClick={() => {setFormStatus('')}}>{lang === 'pl'? 'Odśwież stronę': 'Refresh a page'}</button>
        </main>);
    return (<main className='contactPage'>
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
            <input type='hidden' name='form-name' value='contact'/>
            <div hidden>
                <input name='bot-field'/>
            </div>
            <h1>Contact</h1>
            <input type='text' name='firstName' id='firstName' placeholder={lang === 'pl'? 'Imię': 'First Name'}
            value={formState.firstName} onChange={(event: any) => { formDispatch({type: 'UPDATE_FIRST_NAME', payload: event.target.value}) }}/>
            <input type='text' name='lastName' id='lastName' placeholder={lang === 'pl'? 'Nazwisko': 'Last Name'}
            value={formState.lastName} onChange={(event: any) => { formDispatch({type: 'UPDATE_LAST_NAME', payload: event.target.value}) }}/>
            <input type='email' name='email' id='email' placeholder='Email'
            value={formState.email} onChange={(event: any) => { formDispatch({type: 'UPDATE_EMAIL', payload: event.target.value}) }}/>
            <textarea name='message' id='message' placeholder={lang === 'pl'? 'Wiadomość': 'Message'}
            value={formState.message} onChange={(event: any) => { formDispatch({type: 'UPDATE_MESSAGE', payload: event.target.value}) }}></textarea>
            <button type='submit'>{lang === 'pl'? 'Wyślij': 'Send'}</button>
            
        </form>
    </main>)
}

export default Contact;
