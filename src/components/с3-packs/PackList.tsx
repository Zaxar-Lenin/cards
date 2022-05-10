import React from 'react';
import s from './PackList.module.css';

export const PackList = () => {
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
               <div className={s.packlistTable}>Здесь таблица</div>
               <div className={s.packlistPagination}>здесь пагинация</div>
           </div>
       </div>
    );
};
