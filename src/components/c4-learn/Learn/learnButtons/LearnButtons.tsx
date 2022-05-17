import React from 'react';
import {Button} from '@mui/material';

type LearnButtonsType = {
    onClickCancel: () => void
    onClickShowAnswer: () => void
}

export const LearnButtons = ({onClickCancel, onClickShowAnswer}: LearnButtonsType) => {

    const onCancelHandler = () => {
        onClickCancel()
    }

    const onShowAnswerHandler = () => {
        onClickShowAnswer()
    }

    return (
        <>
            <Button variant="contained"
                    sx={{
                        borderRadius: '15px',
                        width: '114px',
                        height: '25px',
                        textTransform: 'initial',
                        fontSize: '14px',
                    }}
                    size="small"
                    color="inherit"
                    onClick={onCancelHandler}>
                Cancel</Button>

            <Button variant="contained"
                    sx={{
                        borderRadius: '15px',
                        width: '114px',
                        height: '25px',
                        textTransform: 'initial',
                        fontSize: '14px'
                    }}
                    size="small"
                    onClick={onShowAnswerHandler}>
                Show answer</Button>
        </>
    );
};

