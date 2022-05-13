import React, {useState} from 'react';
import s from "./PersonalInformation.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Routers} from "../../c1-main/routers";
import {Navigate} from "react-router-dom";
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';
import {updateNameAndImg} from "../../../store/reducers/s4_ProfileReducer";

export const PersonalInformation = () => {
    const name = useAppSelector<string>(state => state.profile.profile.name)

    const avatar = useAppSelector<string | undefined>(state => state.profile.profile.avatar)

    const email = useAppSelector<string>(state => state.profile.profile.email)

    const [edit, setEdit] = useState(true)

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: name,
            avatar: avatar,
            email: email,
        },
        onSubmit: values => {
            dispatch(updateNameAndImg({name: values.name, avatar: values.avatar}))
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
                        style={{
                            width: '100%'
                        }}
                        id="name"
                        label="Nickname"
                        variant="standard"
                        {...formik.getFieldProps('name')}
                    />
                    <TextField
                        style={{
                            width: '100%'
                        }}
                        id="email"
                        label="Email"
                        variant="standard"
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={s.button_box}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '120px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '14px',
                                color:'black',
                                backgroundColor: '#D7D8EF'
                            }}
                            size="small"
                            onClick={handlerCancelButton}>
                        Cancel</Button>
                    <Button
                        type = {"submit"}
                        variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '120px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '14px'
                            }}
                            size="small">
                        Save</Button>
                </div>
            </form>
        </div>
    );
}



