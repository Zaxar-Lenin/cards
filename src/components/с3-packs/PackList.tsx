import React, {useEffect} from 'react';
import s from './PackList.module.css';
import {Navigate} from 'react-router-dom';
import {Routers} from '../c1-main/routers';
import {useAppDispatch, useAppSelector} from '../../Hooks/hooks';
import {addPackList, getPacksList} from '../../store/reducers/s10_PackListReducer';
import {Search} from './p2-Search/Search';
import {CustomTable} from './Table/CustomTable';
import BasicPagination from './Pagination/Pagination';
import {Range} from '../../Assets/Range/Range';

export const PackList = () => {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)
    const packName = useAppSelector(state => state.packList.queryParams.packName)
    const sortPacks = useAppSelector(state => state.packList.queryParams.sortPacks)
    const page = useAppSelector(state => state.packList.queryParams.page)
    const amountPacks = useAppSelector(state => state.packList.queryParams.pageCount)
    const min = useAppSelector(state => state.packList.queryParams.min)
    const max = useAppSelector(state => state.packList.queryParams.max)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPacksList());
    }, [packName, sortPacks, page, amountPacks, min, max]);

    const addPackClickHandler = () => {
        dispatch(addPackList({}));
    }

    if (!isLoggedIn) {
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
                    {/*<div>RANGERANGERARANG</div>*/}
                    <div><Range min={min} max={max}/></div>
                </div>
            </div>
            <div className={s.packList}>
                <h3>Pack list</h3>
                <div className={s.packlistSearch}>
                    <Search/>
                    <span><button onClick={addPackClickHandler}>Add new pack</button></span>
                </div>
                <div className={s.packlistTable}><CustomTable/></div>
                <div className={s.packlistPagination}><BasicPagination/></div>
            </div>
        </div>
    );
};
