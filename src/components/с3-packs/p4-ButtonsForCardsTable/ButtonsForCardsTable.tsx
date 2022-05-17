import ButtonsStyles from "../p1-ButtonsForPacks/ButtonsForPacks.module.css";
import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../Hooks/hooks";
import {deleteCard, getCardsList} from "../../../store/reducers/s11_CardsListReducer";

type ButtonsForCardsTableType = {
    cardId?: string;
    packId?: string;
}

export const ButtonsForCardsTable = (props: ButtonsForCardsTableType) => {
    const dispatch = useAppDispatch();

    const deleteCardHandler = () => {
        dispatch(deleteCard({id: props.cardId as string}));
    }

    return (
        <div className={ButtonsStyles.buttonGroupStyle}>
            <Button variant="outlined"
                    size="small"
                    onClick={deleteCardHandler}
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
        </div>
    )
}