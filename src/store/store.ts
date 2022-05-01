import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/s1_LoginReducer";
import {logOutReducer} from "./reducers/s2_LogOutReducer";
import {errorReducer} from "./reducers/s3_ErrorReducer";
import {profileReducer} from "./reducers/s4_ProfileReducer";
import {testReducer} from "./reducers/s5_TestReducer";
import {passEnteringReducer} from "./reducers/s6_PassEnteringReducer";
import {passRecovReducer} from "./reducers/s7_PassRecovReducer";

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