import React, {useState} from 'react';
import s from "./PersonalInformation.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Routers} from "../../routers";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useCustomSelector} from "../../../../store/store";
import {updateNameAndImg} from "../../../../API/thunk";
import {useFormik} from "formik";

export const PersonalInformation = () => {
    const name = useCustomSelector<string>(state => state.profile.name)

    const avatar = useCustomSelector<string | undefined>(state => state.profile.avatar)

    const email = useCustomSelector<string>(state => state.profile.email)

    const [edit, setEdit] = useState(true)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            Name: name,
            avatar,
            email: email,
        },
        onSubmit: values => {
            dispatch(updateNameAndImg({name: values.Name, avatar: values.avatar}))
            setEdit(false)
        },
    });

    if (!edit) {
        return <Navigate to={Routers.PROFILE}/>
    }


    const handlerCancelButton = () => {
        setEdit(false)
    }


    return (
        <div className={s.personal}>
            <h3>Personal Information</h3>
            <div className={s.image}>
                <img src={avatar} alt=""/>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.inputBox}>
                    <TextField
                        className={s.inputS}
                        id="standard-basic"
                        label="Nickname"
                        variant="standard"
                        {...formik.getFieldProps}
                    />
                    <TextField
                        className={s.inputS}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        {...formik.getFieldProps}
                    />
                </div>
                <div className={s.button_box}>
                    <Button onClick={handlerCancelButton}
                            className={s.buttonD}
                            variant="contained">Cancel</Button>
                    <Button type={"submit"}
                            className={s.buttonD}
                            variant="contained">Save</Button>
                </div>
            </form>
        </div>
    );
}

