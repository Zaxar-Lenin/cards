import Button from '@mui/material/Button'
import ButtonsStyles from './ButtonsForPacks.module.css'

export const ButtonsForPacks = () => {
    return <div className={ButtonsStyles.mainButtonsStyle}>
        <Button variant="outlined"
                size="small"
        >
            Delete
        </Button>
        <Button
            variant="outlined"
            size="small"
        >
            Edit
        </Button>
        <Button
            variant="outlined"
            size="small"
        >
            Learn
        </Button>
    </div>
}