import React from 'react';
import {useFormik} from 'formik';
import {Button, Checkbox, TextField} from '@mui/material';
import s from './LoginForm.module.css'
import {loginTC} from '../../../store/reducers/s1_LoginReducer';
import {Navigate, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../Hooks/hooks';
import {Routers} from '../../c1-main/routers';

type ErrorType = {
    email?: string
    password?: string
}

export const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const errorMsg = useAppSelector(state => state.login.errorMessage)

    const label = {inputProps: {type: 'checkbox'}}

    const formik = useFormik({
        initialValues: {
            email: 'petuhalkonaftov@mail.ru',
            password: '12345678',
            rememberme: false
        },
        validate: (value) => {
            const errors: ErrorType = {};

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                errors.email = 'Invalid email address'
            } else if (!value.email) {
                errors.email = 'Required Email';
            }
            if (!value.password) {
                errors.password = 'Required password';
            }
            return errors
        },
        onSubmit: values => {
            const params = {email: values.email, password: values.password, rememberMe: values.rememberme}
            dispatch(loginTC(params))
        },
    });

    if (isLoggedIn){
        return <Navigate to={Routers.PROFILE}/>
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.textFields}>
                {errorMsg && <div style={{color: 'red'}}>{errorMsg}</div>}
                <TextField
                    sx={{width: '250px'}}
                    margin="normal"
                    size="small"

                    label="Email"
                    variant="standard"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />

                <TextField
                    sx={{width: '250px', marginTop: '25px'}}
                    type="password"
                    size="small"
                    id="password"
                    name="password"
                    label="Password"
                    variant="standard"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    onBlur={formik.handleBlur}
                />
                <div onClick={() => navigate('/login/forgot')}
                     className={s.forgotPass}>Forgot Password
                </div>
                <div className={s.loginButton}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '170px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '16px'
                            }}
                            size="small"
                            type="submit">
                        Login</Button>
                </div>
                <div className={s.rememberMe}>
                    <Checkbox {...label} size="small"
                              onChange={formik.handleChange}
                              name="rememberme"
                              sx={{marginTop: '3px'}}/>
                    Remember me
                </div>
                <div className={s.loginFooter}>
                    Don't have an account?
                    <span onClick={()=>navigate(Routers.REGISTRATION)} className={s.signUp}> Sign Up</span>
                </div>
            </div>
        </form>
    );
};



