import React from 'react';
import s from "./Main.module.css"
import Header from "./m1-header/Header";
import Body from './m2-body/Body';

function Main() {
    return (
        <div className={s.main}>
            <Header/>
            <Body/>
        </div>
    );
}

export default Main;
