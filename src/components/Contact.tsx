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
        return(<main className='contactPage'>
            <h2 className='statusText'>{formStatus.text}</h2>
            <button className='statusButton' onClick={refreshPage(formStatus, formDispatch, setFormStatus)}>{langData.refresh}</button>
        </main>);
    return (<main className='contactPage'>
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={submitHandler(setFormStatus, formState, langData)}>
            <input type='hidden' name='form-name' value='contact'/>
            <div hidden>
                <input name='bot-field'/>
            </div>
            <h1>{langData?.contact}</h1>
            <input type='text' name='firstName' placeholder={langData?.firstName}
                value={formState.firstName} onChange={(event: any) => { formDispatch({type: 'UPDATE_FIRST_NAME', payload: event.target.value}) }}/>
            <input type='text' name='lastName' placeholder={langData?.lastName}
                value={formState.lastName} onChange={(event: any) => { formDispatch({type: 'UPDATE_LAST_NAME', payload: event.target.value}) }}/>
            <input type='email' name='email' placeholder='Email'
                value={formState.email} onChange={(event: any) => { formDispatch({type: 'UPDATE_EMAIL', payload: event.target.value}) }}/>
            <textarea name='message' placeholder={langData?.message}
                value={formState.message} onChange={(event: any) => { formDispatch({type: 'UPDATE_MESSAGE', payload: event.target.value}) }}></textarea>
            <button type='submit'>{langData?.send}</button>
        </form>
    </main>)
}

export default Contact;
