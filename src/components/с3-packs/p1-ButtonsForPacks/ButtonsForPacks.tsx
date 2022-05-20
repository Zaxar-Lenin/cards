import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'
import {useAppDispatch, useAppSelector} from "../../../Hooks/hooks";
import {deletePackList} from "../../../store/reducers/s10_PackListReducer";
import {URLSearchParamsInit, useNavigate, useParams, useSearchParams} from 'react-router-dom';

type ButtonsForPacksPropsType = {
    packId?: string;
    ownerId?: string;
    setActiveDelete?: (n: boolean) => void
    setActiveUpdate?: (n: boolean) => void
    packName?: string;
    setSearchParams:
        (nextInit: URLSearchParamsInit, navigateOptions?:
            {
                replace?: boolean | undefined;
                state?: any;
            } | undefined) => void
    isMyPack: boolean
}

export const ButtonsForPacks = (
    {
        packId,
        ownerId,
        setActiveDelete,
        setActiveUpdate,
        packName,
        setSearchParams,
        isMyPack
    }: ButtonsForPacksPropsType) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const userId = useAppSelector(store => store.profile.profile._id);


    const deletePackHandler = () => {
        setActiveDelete && setActiveDelete(true)
        if (packId) {
            isMyPack ? setSearchParams({packId, userId}) : setSearchParams({packId})
        }
        ;
    }
    const updatePackHandler = () => {
        setActiveUpdate && setActiveUpdate(true)
        if (packId) {
            isMyPack ? setSearchParams({packId, userId}) : setSearchParams({packId})
        }
        ;
    }

    const onLearnHandler = (packId: string, packName: string) => {
        navigate(`/learn/${packId}/${packName}`)
    }

    return (
        <div className={ButtonsStyles.mainButtonsStyle}>
            {
                userId === ownerId &&
                <div className={ButtonsStyles.buttonGroupStyle}>
                    <Button variant="outlined"
                            size="small"
                            onClick={deletePackHandler}
                            sx={{
                                gridArea: 'delete',
                                backgroundColor: '#F1453D',
                                color: 'white',
                                ":hover": {color: '#1976D2'}
                            }}
                    >
                        Delete
                    </Button>
                    <Button
                        onClick={updatePackHandler}
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
                onClick={() => {
                    onLearnHandler(packId as string, packName as string)
                }}
            >
                Learn
            </Button>
        </div>)
}