import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {useFormik} from "formik";
import {loginTC} from "../../../store/reducers/s1_LoginReducer";
import style from "../Login/LoginForm.module.css";
import {Button, Checkbox, TextField} from "@mui/material";
import React from "react";
import styleSignIn from '../Login/SignInPage/SignIn.module.css'
import {registerUser} from "../../../store/reducers/s8_RegistrationReducer";
import {useSelector} from "react-redux";

type ErrorType = {
    email?: string
    password?: string
}

export const Registration = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const registrationSuccess = useAppSelector(state => state.registration.registrationSuccess)


    const formik = useFormik({
        initialValues: {
            email: 'testforcardproject@list.ru',
            password: '1q2a3z3e'
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
                        <div>
                            <div className={style.loginButton}>
                                <Button variant="text"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '170px',
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
                            <div className={style.loginButton}>
                                <Button variant="contained"
                                        sx={{
                                            borderRadius: '15px',
                                            width: '170px',
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