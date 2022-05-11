import React, {useEffect} from 'react';
import s from './PackList.module.css';
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {Routers} from "../c1-main/routers";
import {useAppSelector} from "../../Hooks/hooks";
import { getPacksList } from '../../store/reducers/PackListReducer';
import {CustomTable} from "./Table/Table";

export const PackList = () => {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPacksList())
    },[])

    if (!isLoggedIn){
        return <Navigate to={Routers.LOGIN}/>
    }
    return (
       <div className={s.container}>
           <div className={s.packsOptions}>
               <div className={s.optionsButton}>
                   <span>Show packs cards</span>
                   <div className={s.buttonsMyAll}>
                       <button>My</button>
                       <button>All</button>
                   </div>
               </div>
               <div className={s.optionsRange}>
                   <span>Number of cards</span>
                   <div>RANGERANGERARANG</div>
               </div>
           </div>
           <div className={s.packList}>
               <h3>Pack list</h3>
               <div className={s.packlistSearch}><input type="text"/>
                   <span><button>Add new pack</button></span>
               </div>
               <div className={s.packlistTable}><CustomTable/></div>
               <div className={s.packlistPagination}>здесь пагинация</div>
           </div>
       </div>
    );
};
