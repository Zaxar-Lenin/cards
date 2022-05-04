import React, {useState} from 'react';
import s from "./PersonalInformation.module.css"
import {IMG_PROFILE} from "../b3-profile/EditProfile/EditProfile";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Routers} from "../../routers";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const PersonalInformation = () => {
    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch()
    if (!edit) {
        return <Navigate to={Routers.PROFILE}/>
    }
    const handlerSaveButton = () => {
        dispatch(updateProfile)
    }
    const handlerCancelButton = () => {
        setEdit(false)
    }
    return (
        <div className={s.personal}>
            <h3>Personal Information</h3>
            <div className={s.image}>
                <img src={IMG_PROFILE} alt=""/>
            </div>
            <div className={s.inputBox}>
                <TextField className={s.inputS}
                           id="standard-basic"
                           label="Nickname"
                           variant="standard"/>
                <TextField className={s.inputS}
                           id="standard-basic"
                           label="Email"
                           variant="standard"/>
            </div>
            <div className={s.button_box}>
                <Button onClick={handlerCancelButton}
                        className={s.buttonD}
                        variant="contained">Cancel</Button>
                <Button onClick={handlerSaveButton}
                        className={s.buttonD}
                        variant="contained">Save</Button>
            </div>
        </div>
    );
}

