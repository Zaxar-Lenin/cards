import {combineReducers} from 'redux';
import {loginReducer} from './reducers/s1_LoginReducer';
import {logOutReducer} from './reducers/s2_LogOutReducer';
import {errorReducer} from './reducers/s3_ErrorReducer';
import {profileReducer} from './reducers/s4_ProfileReducer';
import {testReducer} from './reducers/s5_TestReducer';
import {passEnteringReducer} from './reducers/s6_PassEnteringReducer';
import {passRecovReducer} from './reducers/s7_PassRecovReducer';
import {configureStore} from '@reduxjs/toolkit';
import {registrationReducer} from "./reducers/s8_RegistrationReducer";
import {loader} from './reducers/s9-AppReducer';
import {packReducer} from "./reducers/PackListReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    logOut: logOutReducer,
    error: errorReducer,
    registration: registrationReducer,
    profile: profileReducer,
    test: testReducer,
    passEntering: passEnteringReducer,
    passRecov: passRecovReducer,
    app: loader,
    packList: packReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>