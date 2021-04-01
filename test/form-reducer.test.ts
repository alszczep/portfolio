import { formInitialState, formReducer } from './../src/modules/form-reducer';

describe('form reducer', () => {
    describe('UPDATE_FIRST_NAME', () => {
        it('#1', () => {
            expect(formReducer(formInitialState, {type: 'UPDATE_FIRST_NAME', payload: 'name'})).toStrictEqual({
                firstName: 'name',
                lastName: '',
                email: '',
                message: ''
            })
        })
        it('2#', () => {
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
    })
    describe('UPDATE_LAST_NAME', () => {
        it('#1', () => {
            expect(formReducer(formInitialState, {type: 'UPDATE_LAST_NAME', payload: 'name'})).toStrictEqual({
                firstName: '',
                lastName: 'name',
                email: '',
                message: ''
            })
        })
        it('2#', () => {
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
    })
    describe('UPDATE_EMAIL', () => {
        it('#1', () => {
            expect(formReducer(formInitialState, {type: 'UPDATE_EMAIL', payload: 'email'})).toStrictEqual({
                firstName: '',
                lastName: '',
                email: 'email',
                message: ''
            })
        })
        it('2#', () => {
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
    })
    describe('UPDATE_MESSAGE', () => {
        it('#1', () => {
            expect(formReducer(formInitialState, {type: 'UPDATE_MESSAGE', payload: 'message'})).toStrictEqual({
                firstName: '',
                lastName: '',
                email: '',
                message: 'message'
            })
        })
        it('2#', () => {
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
    })
    describe('CLEAR', () => {
        it('#1', () => {
            expect(formReducer(formInitialState, {type: 'CLEAR'})).toStrictEqual(formInitialState)
        })
        it('2#', () => {
            expect(formReducer({
                firstName: 'aaa',
                lastName: 'aaa',
                email: 'aaa',
                message: 'aaa'
            }, {type: 'CLEAR'})).toStrictEqual(formInitialState)
        })
    })
});