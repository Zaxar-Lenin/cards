import React from 'react';
import s from './Learn.module.css';
import {Button} from '@mui/material';

export const Learn = () => {
    return (
        <div className={s.container}>
           <div className={s.header}>
               {/*нужно подтянуть имя пака*/}
               Learn 'Pack Name'
           </div>
            <div className={s.contentBlock}>
                <div className={s.questionBlock}>
                    {/*подтянуть вопрос из пака*/}
                    <span>Question:</span> 'some question'
                </div>
                <div className={s.buttons}>
                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '114px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '14px',
                            }}
                            size="small"
                    color='inherit'>
                        Cancel</Button>

                    <Button variant="contained"
                            sx={{
                                borderRadius: '15px',
                                width: '114px',
                                height: '25px',
                                textTransform: 'initial',
                                fontSize: '14px'
                            }}
                            size="small">
                        Show answer</Button>
                </div>
            </div>
        </div>
    );
};



