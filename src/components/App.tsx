import React, {useEffect} from 'react';
import './App.css';
import Main from "./c1-main/Main";
import {useDispatch} from 'react-redux';
import {setDataUser} from "../store/reducers/s4_ProfileReducer";
import {useAppSelector} from "../Hooks/hooks";

function App() {
    const dispatch = useDispatch()
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    useEffect(() => {
        dispatch(setDataUser())
    }, [])

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
