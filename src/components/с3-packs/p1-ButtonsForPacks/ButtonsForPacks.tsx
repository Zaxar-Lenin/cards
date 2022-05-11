import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'

export const ButtonsForPacks = () => {
    return <div className={ButtonsStyles.mainButtonsStyle}>
        <Button variant="outlined">Delete</Button>
        <Button variant="outlined">Edit</Button>
        <Button variant="outlined">Learn</Button>
    </div>
}