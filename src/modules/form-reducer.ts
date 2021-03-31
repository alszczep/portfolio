import { FormStateInterface } from './../interfaces/FormStateInterface';

///////////
// to be tested
///////////

export const formReducer = (state: FormStateInterface, action: any) => {
    switch(action.type){
        case 'UPDATE_FIRST_NAME':
            return {...state, firstName: action.payload};
        case 'UPDATE_LAST_NAME':
            return {...state, lastName: action.payload};
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload};
        case 'UPDATE_MESSAGE':
            return {...state, message: action.payload};
        case 'CLEAR':
            return formInitialState;
    }
    return state;
}
export const formInitialState: FormStateInterface = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
}