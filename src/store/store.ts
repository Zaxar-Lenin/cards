import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./s1_LoginReducer";
import {logOutReducer} from "./s2_LogOutReducer";
import {errorReducer} from "./s3_ErrorReducer";
import {profileReducer} from "./s4_ProfileReducer";
import {testReducer} from "./s5_TestReducer";
import {passEnteringReducer} from "./s6_PassEnteringReducer";
import {passRecovReducer} from "./s7_PassRecovReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    logOut: logOutReducer,
    error: errorReducer,
    profile: profileReducer,
    test: testReducer,
    passEntering: passEnteringReducer,
    passRecov: passRecovReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type StoreType = ReturnType<typeof rootReducer>