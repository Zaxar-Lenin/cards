import React, {useEffect} from 'react';
import './App.css';
import Main from './c1-main/Main';
import {setDataUser} from '../store/reducers/s4_ProfileReducer';
import {useAppDispatch, useAppSelector} from '../Hooks/hooks';
import {Preloader} from '../Assets/Preloader/Preloader';

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(setDataUser())
    }, [])

    // if (!isInitialized) {
    //     return <div><Preloader/></div>
    // }

    return (
        // <div>{isInitialized ? <Preloader/> :
            <div className="App">
                <Main/>
            </div>
        // }
        // </div>
        // <div className="App">
        //     <Main/>
        // </div>
    )
}

export default App;
