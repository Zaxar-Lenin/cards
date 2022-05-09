import React from 'react';
import s from './PackList.module.css';

export const PackList = () => {
    return (
       <div className={s.container}>
           <div className={s.packsOptions}>
               <div className={s.optionsButton}>
                   <span>Show packs cards</span>
                   <div>
                       <button>My</button>
                       <button>All</button>
                   </div>
               </div>
               <div className={s.optionsRange}>
                   <span>Number of cards</span>
                   <div>RANGERANGERANGE</div>
               </div>
           </div>



           <div className={s.packList}>
               <h3>Pack list</h3>
               <div className={s.packlistSearch}><input type="text"/>
                   <span><button>Add new pack</button></span>
               </div>
               <div className={s.packlistTable}>sdfsdfsdfsdf</div>
               <div className={s.packlistPagination}>asdasd</div>
           </div>
       </div>
    );
};
