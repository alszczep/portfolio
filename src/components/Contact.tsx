import React, { FC, useEffect, useReducer } from "react";
import { resizeHandler } from "../modules/main-resize-handler";
import qs from 'qs';
import NetlifyForm from "react-netlify-form";

const formReducer = (state: FormStateInterface, action: any) => {
    switch(action.type){
        case 'UPDATE_FIRST_NAME':
            return {...state, firstName: action.payload};
        case 'UPDATE_LAST_NAME':
            return {...state, lastName: action.payload};
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload};
        case 'UPDATE_MESSAGE':
            return {...state, message: action.payload};
    }
    return state;
}
const formInitialState: FormStateInterface = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}
interface FormStateInterface{
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
const Contact: FC<any> = (props): JSX.Element => {
    const [formState, formDispatch] = useReducer(formReducer, formInitialState);
    useEffect(() => {
        resizeHandler();
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(window.location.href + "/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: qs.stringify({ "form-name": "contact", "firstName": formState.firstName, "lastName": formState.lastName, "emailName": formState.email, "message": formState.message})
        })
        .then(response => {
            if (response.status > 199 && response.status < 300){
                alert('succes');
            } else {
                alert('error');
            } 
          })
        .catch(error => alert(error));
    };
    return (<main className='contactPage'>
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
            <input type='hidden' name='form-name' value='contact'/>
            <div hidden>
                <input name='bot-field'/>
            </div>
            <h1>Contact</h1>
            <input type='text' name='firstName' id='firstName' placeholder='First Name' 
            value={formState.firstName} onChange={(event: any) => { formDispatch({type: 'UPDATE_FIRST_NAME', payload: event.target.value}) }}/>
            <input type='text' name='lastName' id='lastName' placeholder='Last Name' 
            value={formState.lastName} onChange={(event: any) => { formDispatch({type: 'UPDATE_LAST_NAME', payload: event.target.value}) }}/>
            <input type='email' name='email' id='email' placeholder='Email'
            value={formState.email} onChange={(event: any) => { formDispatch({type: 'UPDATE_EMAIL', payload: event.target.value}) }}/>
            <textarea name='message' id='message' placeholder='Message'
            value={formState.message} onChange={(event: any) => { formDispatch({type: 'UPDATE_MESSAGE', payload: event.target.value}) }}></textarea>
            <button type='submit'>Send</button>
        </form>
    </main>)
}

export default Contact;