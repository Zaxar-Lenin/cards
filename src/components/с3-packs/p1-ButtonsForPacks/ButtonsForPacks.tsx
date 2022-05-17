import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {useNavigate} from "react-router-dom";

type ButtonsForPacksPropsType = {
    packId?: string;
    ownerId?: string;
    setActive?: (n: boolean) => void
}

export const ButtonsForPacks = (props: ButtonsForPacksPropsType) => {

    const userId = useAppSelector(store => store.profile.profile._id);

    const navigate = useNavigate();

    const deletePackHandler = () => {
        props.setActive && props.setActive(true)
        navigate(`/packlist/${props.packId}`);

    }

    return (
        <div className={ButtonsStyles.mainButtonsStyle}>
            {
                userId === props.ownerId &&
                <div className={ButtonsStyles.buttonGroupStyle}>
                    <Button variant="outlined"
                            size="small"
                            onClick={deletePackHandler}
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
            }
            <Button
                variant="outlined"
                size="small"
                sx={{gridArea: 'learn'}}
            >
                Learn
            </Button>
        </div>)
}