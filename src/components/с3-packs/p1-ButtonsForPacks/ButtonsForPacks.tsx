import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'
import {useAppSelector} from '../../../Hooks/hooks';
import {URLSearchParamsInit, useNavigate} from 'react-router-dom';
import {selectIsLoading, selectUserId} from '../../../store/selectors/Selectors';

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

    const userId = useAppSelector(selectUserId);
    const isLoading = useAppSelector(selectIsLoading);


    const deletePackHandler = () => {
        setActiveDelete && setActiveDelete(true)
        if (packId) {
            isMyPack ? setSearchParams({packId, userId}) : setSearchParams({packId})
        }
    }
    const updatePackHandler = () => {
        setActiveUpdate && setActiveUpdate(true)
        if (packId) {
            isMyPack ? setSearchParams({packId, userId}) : setSearchParams({packId})
        }
    }

    const onLearnHandler = (packId: string, packName: string) => {
        navigate(`/learn/${packId}/${packName}`)
    }

    return (
        <div className={ButtonsStyles.mainButtonsStyle}>
            {
                userId === ownerId &&
                <div className={ButtonsStyles.buttonGroupStyle}>
                    <Button
                        disabled={isLoading}
                        variant="outlined"
                        size="small"
                        onClick={deletePackHandler}
                        sx={{
                            gridArea: 'delete',
                            backgroundColor: '#F1453D',
                            color: 'white',
                            ':hover': {color: '#1976D2'}
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        disabled={isLoading}
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
                disabled={isLoading}
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