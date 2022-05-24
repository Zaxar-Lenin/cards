import React, {useEffect} from 'react';
import './App.css';
import Main from './c1-main/Main';
import {setDataUser} from '../store/reducers/s4_ProfileReducer';
import {useAppDispatch, useAppSelector} from '../Hooks/hooks';
import {Preloader} from '../Assets/Preloader/Preloader';
import { MainHeader } from './c1-main/m1-header/MainHeader/MainHeader';
import {selectIsInitialized, selectIsViewHeader} from '../store/selectors/Selectors';

export const App = () => {
    const dispatch = useAppDispatch()

    const isInitialized = useAppSelector(selectIsInitialized)
    const isViewHeader = useAppSelector(selectIsViewHeader)

    useEffect(() => {
        dispatch(setDataUser())
    }, [])

    if (!isInitialized) {
        return <div><Preloader/></div>
    }

    return (
        <>
            {isViewHeader && <MainHeader/>}
        <div className="App">
            <Main/>
        </div>
        </>
    )
}

