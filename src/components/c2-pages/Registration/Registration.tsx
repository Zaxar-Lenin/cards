import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {useFormik} from "formik";
import style from "../Login/LoginForm.module.css";
import {Button, TextField} from "@mui/material";
import React from "react";
import styleSignIn from '../Login/SignInPage/SignIn.module.css'
import {registerUser} from "../../../store/reducers/s8_RegistrationReducer";
import regButtonStyle from './Registration.module.css'

type ErrorType = {
    email?: string;
    password?: string;
    repeatPassword?: string;
}

export const Registration = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const registrationSuccess = useAppSelector(state => state.registration.registrationSuccess)
    const errorMsg = useAppSelector(state => state.registration.errorMessage)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: ''
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
            if (!value.repeatPassword) {
                errors.repeatPassword = 'Required password';
            }
            if (value.password !== value.repeatPassword) {
                errors.repeatPassword = 'Please, check passwords'
            }
            return errors;
        },
        onSubmit: values => {
            const params = {email: values.email, password: values.password};
            dispatch(registerUser(params));
        },
    });

    if (registrationSuccess) {
        navigate('/login');
    }

    return (
        <div className={styleSignIn.container}>
            <div className={styleSignIn.header}>
                <h3>Sign Up</h3>
            </div>
            <div className={styleSignIn.body}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.textFields}>
                        {errorMsg && <div style={{color: 'red'}}>{errorMsg}</div>}
                        <TextField
                            sx={{width: '250px'}}
                            margin="normal"
                            size="small"
                            id="email"
                            name="email"
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
                        <TextField
                            sx={{width: '250px', marginTop: '25px'}}
                            type="password"
                            size="small"
                            id="repeatPassword"
                            name="repeatPassword"
                            label="Repeat password"
                            variant="standard"
                            value={formik.values.repeatPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                            helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                            onBlur={formik.handleBlur}
                        />
                        <div className={regButtonStyle.buttonRegistrationGroup}>
                            <div className={`${style.loginButton} ${regButtonStyle.cancelButton}`}>
                                <Button variant="text"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '100px',
                                            height: '25px',
                                            textTransform: 'initial',
                                            fontSize: '16px',
                                            backgroundColor: '#D7D8EF',
                                            fontWeight: '550'
                                        }}
                                        size="small"
                                        type="submit"
                                        onClick={() => navigate('/login')}>
                                    Cancel</Button>
                            </div>
                            <div className={`${style.loginButton} ${regButtonStyle.registerButton}`}>
                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '140px',
                                            height: '25px',
                                            textTransform: 'initial',
                                            fontSize: '16px'
                                        }}
                                        size="small"
                                        type="submit"
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}