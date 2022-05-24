import {InitialStateType, loginReducer, loginTC, resetPassword, setIsLogged} from './s1_LoginReducer';
import {loginAPI, LoginParamsType, ResponseType} from '../../API/loginAPI'

jest.mock('../../API/loginAPI')
const loginAPIMock = loginAPI as jest.Mocked<typeof loginAPI>

const result: ResponseType = {
    _id: 'string',
    email: 'string',
    rememberMe: false,
    isAdmin: false,
    name: 'string',
    token: 'string',
    avatar: 'string',
    publicCardPacksCount: 0,
    created: 'string',
    updated: 'string',
    verified: false,
    error: 'string',
    tokenDeathTime: 0,
}

// @ts-ignore
loginAPIMock.login.mockReturnValue(result)

let startState: InitialStateType

beforeEach(() => {
    startState = {
        isLoggedIn: false,
        info: null,
        errorMessage: null,
        changePassMsg: ''
    }
})

describe('login reducer test', () => {

    test('change isLoggedIn', () => {

        const endState = loginReducer(startState, setIsLogged({value: true}))

        expect(endState.isLoggedIn).toBeTruthy()
        expect(startState.isLoggedIn).toBeFalsy()
    })
    test('check error message', () => {
        const action = {type: resetPassword.rejected, payload: 'some error'}
        // const action = {type: resetPassword.rejected}

        const endState = loginReducer(startState, action)

        expect(endState.errorMessage).toBe('some error')
        expect(startState.errorMessage).toBeNull()
    })
    test('thunk loginTC', async ()=> {
        const thunk = loginTC({email: 'lk@kd.sd', rememberMe: true, password: '12345678'})
        const dispatchMock = jest.fn()
        const getStateMock = jest.fn()

        await thunk(dispatchMock, getStateMock, {})
        expect(dispatchMock).toBeCalledTimes(6)
    })

})