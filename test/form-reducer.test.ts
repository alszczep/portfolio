import { formInitialState, formReducer } from './../src/modules/form-reducer';

describe('form reducer', () => {
     it('should set a first name', () => {
        expect(formReducer(formInitialState, {type: 'UPDATE_FIRST_NAME', payload: 'name'})).toStrictEqual({
            firstName: 'name',
            lastName: '',
            email: '',
            message: ''
        })
        expect(formReducer({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        }, {type: 'UPDATE_FIRST_NAME', payload: 'aaab'})).toStrictEqual({
            firstName: 'aaab',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        })
    })
    it('should set a last name', () => {
        expect(formReducer(formInitialState, {type: 'UPDATE_LAST_NAME', payload: 'name'})).toStrictEqual({
            firstName: '',
            lastName: 'name',
            email: '',
            message: ''
        })
        expect(formReducer({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        }, {type: 'UPDATE_LAST_NAME', payload: 'aaab'})).toStrictEqual({
            firstName: 'aaa',
            lastName: 'aaab',
            email: 'aaa',
            message: 'aaa'
        })
    })
    it('should set an email', () => {
        expect(formReducer(formInitialState, {type: 'UPDATE_EMAIL', payload: 'email'})).toStrictEqual({
            firstName: '',
            lastName: '',
            email: 'email',
            message: ''
        })
        expect(formReducer({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        }, {type: 'UPDATE_EMAIL', payload: 'aaab'})).toStrictEqual({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaab',
            message: 'aaa'
        })
    })
    it('should set the message', () => {
        expect(formReducer(formInitialState, {type: 'UPDATE_MESSAGE', payload: 'message'})).toStrictEqual({
            firstName: '',
            lastName: '',
            email: '',
            message: 'message'
        })
        expect(formReducer({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        }, {type: 'UPDATE_MESSAGE', payload: 'aaab'})).toStrictEqual({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaab'
        })
    })
    it('should clear the state', () => {
        expect(formReducer(formInitialState, {type: 'CLEAR'})).toStrictEqual(formInitialState)
        expect(formReducer({
            firstName: 'aaa',
            lastName: 'aaa',
            email: 'aaa',
            message: 'aaa'
        }, {type: 'CLEAR'})).toStrictEqual(formInitialState)
    })
});