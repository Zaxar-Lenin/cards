import React, {useEffect} from 'react';
import './App.css';
import Main from './c1-main/Main';
import {setDataUser} from '../store/reducers/s4_ProfileReducer';
import {useAppDispatch, useAppSelector} from '../Hooks/hooks';
import {Navigate, useNavigate} from 'react-router-dom';
import {Routers} from './c1-main/routers';

export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('useEffect')
        dispatch(setDataUser())
    }, [])

    // if(isLoggedIn){
    //     return <Navigate to={Routers.PROFILE}/>
    // }

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
