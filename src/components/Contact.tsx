import React, { FC, useEffect } from "react";
import { resizeHandler } from "../modules/main-resize-handler";

const Contact: FC<any> = (props): JSX.Element => {
    useEffect(() => {
        resizeHandler();
    })
    return (<main className='contactPage'>
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
            <input type='hidden' name='form-name' value='contact'/>
            <div hidden>
                <input name='bot-field'/>
            </div>
            <h1>Contact</h1>
            <input type='text' name='firstName' id='firstName' placeholder='First Name'/>
            <input type='text' name='lastName' id='lastName' placeholder='Last Name'/>
            <input type='email' name='email' id='email' placeholder='Email'/>
            <textarea name='message' id='message' placeholder='Message'></textarea>
            <button type='submit'>Send</button>
        </form>
    </main>)
}

export default Contact;