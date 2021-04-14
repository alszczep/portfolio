import { FormStateInterface } from "../../interfaces/FormStateInterface";
import { FormStatusInterface } from "../../interfaces/FormStatusInterface";
import qs from 'qs';

export const submitHandler = (setFormStatus: React.Dispatch<React.SetStateAction<FormStatusInterface | undefined>>, formState: FormStateInterface, langData: any) => {
    return (event: any) => {
        event.preventDefault();
        fetch(window.location.href + "/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: qs.stringify({ "form-name": "contact", "firstName": formState.firstName, "lastName": formState.lastName, "email": formState.email, "message": formState.message})
        })
        .then(response => {
            if (response.status > 199 && response.status < 300){
                setFormStatus({success: true, text: langData.sendSuccess});
            } else {
                setFormStatus({success: false, text: langData.sendError});
            } 
        })
        .catch(error => {setFormStatus({success: false, text: langData.sendError})});
    }
};