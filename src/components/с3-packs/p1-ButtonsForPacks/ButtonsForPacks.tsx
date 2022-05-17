import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {deletePackList} from "../../../store/reducers/s10_PackListReducer";
import {useNavigate, useParams} from 'react-router-dom';

type ButtonsForPacksPropsType = {
    packId?: string;
    ownerId?: string;
    packName?: string;
}

export const ButtonsForPacks = (props: ButtonsForPacksPropsType) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const userId = useAppSelector(store => store.profile.profile._id);

    const deletePackHandler = () => {
        dispatch(deletePackList({id: props.packId}))
    }

    const onLearnHandler = (packId: string, packName: string) => {
        navigate(`/learn/${packId}/${packName}`)
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
                onClick={()=> {onLearnHandler(props.packId as string, props.packName as string)}}
            >
                Learn
            </Button>
        </div>)
}