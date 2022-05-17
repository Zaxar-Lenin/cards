import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import s from './Body.module.css'
import {Routers} from '../routers';
import PasswordRecov from './b7-passwordRecov/PasswordRecov';
import LogOut from './b2-logOut/LogOut';
import Error from './b5-error/Error';
import Profile from '../../c2-pages/Profile/Profile';
import PasswordEntering from './b6-passwordEntering/PasswordEntering';
import {SignIn} from '../../c2-pages/Login/SignInPage/SignIn';
import {SendEmailWindow} from '../../c2-pages/Login/EmailSendWindow/SendEmailWindow';
import {EmailConfirmation} from '../../c2-pages/Login/EmailSendWindow/EmailConfirmation/EmailConfirmation';
import {CreateNewPassword} from '../../c2-pages/Login/EmailSendWindow/CreatNewPasswordWindow/CreateNewPassword';
import {PersonalInformation} from "../../c2-pages/PersonalInformation/PersonalInformation";
import {Registration} from "../../c2-pages/Registration/Registration";
import {PackList} from '../../с3-packs/PackList';
import {ButtonsForPacks} from "../../с3-packs/p1-ButtonsForPacks/ButtonsForPacks";
import {CardsTable} from "../../с3-packs/p3-CardsTable/CardsTable";
import {Learn} from '../../c4-learn/Learn/Learn';

function Body() {
    return (
        <div className={s.body}>
            <Routes >
                <Route path={'/'} element ={<Navigate to = {Routers.LOGIN} />}/>
                <Route path = {Routers.LOGIN} element={<SignIn/>}/>
                <Route path = {`${Routers.LOGIN}/forgot`} element={(<SendEmailWindow/>)}/>
                <Route path = {`${Routers.LOGIN}/instruction`} element={(<EmailConfirmation/>)}/>
                <Route path = {`${Routers.LOGIN}/newpassword/*`} element={(<CreateNewPassword/>)}/>

                <Route path = {Routers.LOGOUT} element={<LogOut/>}/>
                <Route path = {Routers.REGISTRATION} element={<Registration/>}/>
                <Route path = {Routers.ERROR} element={<Error/>}/>
                <Route path = {Routers.PROFILE} element={<Profile/>}/>
                <Route path = {Routers.TEST} element={<ButtonsForPacks/>}/>
                <Route path = {`${Routers.CARDS_PACK}/:packId`} element={<CardsTable/>}/>
                <Route path = {Routers.ENTERING_NEW_PASS} element={<PasswordEntering/>}/>
                <Route path = {Routers.PASS_RECOV} element={<PasswordRecov/>}/>
                <Route path = {Routers.PERSONAL_INFORMATION} element={<PersonalInformation/>}/>
                <Route path = {`${Routers.PACK_LIST}/*`} element={<PackList/>}/>
                <Route path = {`${Routers.LEARN}/:packId/:packName`} element={<Learn/>}/>
            </Routes>
        </div>
    );
}

export default Body;
