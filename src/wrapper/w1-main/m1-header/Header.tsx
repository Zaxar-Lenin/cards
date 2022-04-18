import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Routers} from "../routers";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to = {Routers.LOGIN}>LOGIN</NavLink>
            <NavLink to = {Routers.LOGOUT}>LOGOUT</NavLink>
            <NavLink to = {Routers.TEST}>TEST</NavLink>
            <NavLink to = {Routers.PROFILE}>PROFILE</NavLink>
            <NavLink to = {Routers.ERROR}>ERROR</NavLink>
            <NavLink to = {Routers.ENTERING_NEW_PASS}>ENTERING_NEW_PASS</NavLink>
            <NavLink to = {Routers.PASS_RECOV}>PASS_RECOV</NavLink>
        </div>
    );
}

export default Header;
