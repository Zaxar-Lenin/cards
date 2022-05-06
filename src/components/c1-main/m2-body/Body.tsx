import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import s from "./Body.module.css"
import {Routers} from "../routers";
import Login from "./b1-login/Login";
import PasswordRecov from "./b7-passwordRecov/PasswordRecov";
import LogOut from "./b2-logOut/LogOut";
import Error from "./b5-error/Error";
import Profile from "./b3-profile/Profile";
import Test from "./b4-test/Test";
import PasswordEntering from "./b6-passwordEntering/PasswordEntering";
import {PersonalInformation} from "./PersonalInformation/PersonalInformation";

function Body() {
    return (
        <div className={s.body}>
            <Routes >
                {/*<Route path={'/card'} element ={<Navigate to = {Routers.PROFILE} />}/>*/}
                <Route path = {Routers.LOGIN} element={<Login/>}/>
                <Route path = {Routers.LOGOUT} element={<LogOut/>}/>
                <Route path = {Routers.ERROR} element={<Error/>}/>
                <Route path = {Routers.PROFILE} element={<Profile/>}/>
                <Route path = {Routers.TEST} element={<Test/>}/>
                <Route path = {Routers.ENTERING_NEW_PASS} element={<PasswordEntering/>}/>
                <Route path = {Routers.PASS_RECOV} element={<PasswordRecov/>}/>
                <Route path = {Routers.PERSONAL_INFORMATION} element={<PersonalInformation/>}/>
            </Routes>
        </div>
    );
}

export default Body;
