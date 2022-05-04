import React, {useState} from 'react';
import s from "./EditProfile.module.css"
import {Navigate} from 'react-router-dom';
import {Routers} from "../../../routers";

export const IMG_PROFILE = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"

export const EditProfile = () => {
    const [edit, setEdit] = useState(false)
    const handlerButton = () => {
        setEdit(true)
    }

    if (edit) {
        return <Navigate to={Routers.PERSONAL_INFORMATION}/>
    }
    return (
        <div className={s.edit_profile}>
            <div className={s.image}>
                <img src={IMG_PROFILE} alt=""/>
            </div>
            <div className={s.name}>IVan Dav</div>
            <div className={s.status}>FrontEnd</div>
            <div onClick={handlerButton} className={s.button}>Edit Profile</div>
        </div>
    );
}

