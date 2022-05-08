import React, {useEffect} from 'react';
import './App.css';
import Main from './c1-main/Main';
import {setDataUser} from '../store/reducers/s4_ProfileReducer';
import {useAppDispatch, useAppSelector} from '../Hooks/hooks';
import {Preloader} from '../Assets/Preloader/Preloader';
import {Navigate} from 'react-router-dom';
import {Routers} from './c1-main/routers';

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const loading = useAppSelector(state => state.app.isLoading)

    useEffect(() => {
        dispatch(setDataUser())
    }, [])

    if (!isInitialized) {
        return <div><Preloader/></div>
    }

    return (
        <div className="App">
            <Main/>
        </div>
    )
}

