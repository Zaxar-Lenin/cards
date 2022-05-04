import React, {useEffect} from 'react';
import './App.css';
import Main from "./c1-main/Main";
import {useDispatch} from 'react-redux';

function App() {
    const dispatch = useDispatch()

    useEffect(()=> {
        //
    }, [])

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
