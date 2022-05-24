import ButtonsStyles from '../p1-ButtonsForPacks/ButtonsForPacks.module.css';
import Button from '@mui/material/Button';
import {useAppDispatch} from '../../../Hooks/hooks';
import {deleteCard} from '../../../store/reducers/s11_CardsListReducer';
import {CardModal} from '../p5-CardModal/CardModal';
import * as React from 'react';
import {useState} from 'react';

type ButtonsForCardsTableType = {
    cardId?: string;
    packId?: string;
    packName: string
}

export const ButtonsForCardsTable = ({cardId, packId, packName}: ButtonsForCardsTableType) => {

    const dispatch = useAppDispatch();

    const [modalDeleteCardActive, setModalDeleteCardActive] = useState<boolean>(false);

    const deleteButtonHandler = () => {
        setModalDeleteCardActive(true);
        //dispatch(deleteCard({id: cardId}));
    }
    const cancelDeleteHandler = () => {
        setModalDeleteCardActive(false);
    }
    const deleteCardHandler = () => {
        dispatch(deleteCard({id: cardId as string}));
        setModalDeleteCardActive(false);
    }

    return (
        <div className={ButtonsStyles.buttonGroupStyle}>
            <Button variant="outlined"
                    size="small"
                    onClick={deleteButtonHandler}
                    sx={{
                        gridArea: 'delete',
                        backgroundColor:'#F1453D',
                        color: 'white',
                        ":hover": {color: '#1976D2'}
                    }}
            >
                Delete
            </Button>
            <Button
                variant="outlined"
                size="small"
                sx={{gridArea: 'edit'}}
            >
                Edit
            </Button>
            <CardModal active={modalDeleteCardActive} setActive={setModalDeleteCardActive}>
                <div className={ButtonsStyles.modalDelete}>
                    <text className={ButtonsStyles.deleteMessage}>
                        {`Do you really want to remove ${packName}?
                        This card will be removed from this pack.`}
                    </text>
                    <div className={ButtonsStyles.cancelButton}>
                        <Button variant="text"
                                sx={{
                                    borderRadius: '15px',
                                    width: '140px',
                                    height: '25px',
                                    textTransform: 'initial',
                                    fontSize: '16px',
                                    backgroundColor: '#D7D8EF',
                                    color: 'white',
                                    fontWeight: '550',
                                    ":hover": {color: '#1976D2'}
                                }}
                                size="small"
                                type="submit"
                                onClick={cancelDeleteHandler}
                        >
                            Cancel</Button>
                    </div>
                    <div className={ButtonsStyles.deleteButton}>
                        <Button variant="text"
                                sx={{
                                    borderRadius: '15px',
                                    width: '140px',
                                    height: '25px',
                                    textTransform: 'initial',
                                    fontSize: '16px',
                                    backgroundColor: '#F1453D',
                                    fontWeight: '550',
                                    color: 'white',
                                    ":hover": {color: '#1976D2'}
                                }}
                                size="small"
                                type="submit"
                                onClick={deleteCardHandler}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </CardModal>
        </div>
    )
}