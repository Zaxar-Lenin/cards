import React, {ReactNode} from 'react';
import {Button} from '@mui/material';

type LearnButtonsType = {
    onClickCancel: () => void
    onClickSubmit: () => void
    children?: ReactNode
}

export const LearnButtons = ({onClickCancel, onClickSubmit, children}: LearnButtonsType) => {

    const onCancelHandler = () => {
        onClickCancel()
    }

    const onShowAnswerHandler = () => {
        onClickSubmit()
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
                {children}
            </Button>
        </>
    );
};

