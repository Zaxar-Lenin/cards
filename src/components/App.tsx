import React, {useEffect} from 'react';
import './App.css';
import Main from './c1-main/Main';
import {setDataUser} from '../store/reducers/s4_ProfileReducer';
import {useAppDispatch, useAppSelector} from '../Hooks/hooks';
import {Preloader} from '../Assets/Preloader/Preloader';
import { MainHeader } from './c1-main/m1-header/MainHeader/MainHeader';

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(setDataUser())
    }, [])

    if (!isInitialized) {
        return <div><Preloader/></div>
    }


    return (
        <>
            <MainHeader/>
        <div className="App">
            <Main/>
        </div>
        </>
    )
}

