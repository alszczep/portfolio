import { FormStatusInterface } from "../../interfaces/FormStatusInterface";

export const refreshPage = (formStatus: (FormStatusInterface | undefined), formDispatch: React.Dispatch<any>, setFormStatus: React.Dispatch<React.SetStateAction<FormStatusInterface | undefined>>) => {
    return () => {
        if(formStatus?.success === true)
            formDispatch({type: 'CLEAR'});
        setFormStatus({success: false, text: ''});
    }
}