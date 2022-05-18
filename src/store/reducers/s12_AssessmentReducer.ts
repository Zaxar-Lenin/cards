import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {assessmentAPI, ParamsData, UpdatedGradeType} from '../../API/assessmentAPI';
import {log} from 'util';

type InitialStateType = {
    grade: number
    cardsPackId: string
    updatedGrade: UpdatedGradeType
}

const initialState: InitialStateType = {
    grade: 0,
    cardsPackId: '',
    updatedGrade: {
        _id: '',
        cardsPack_id: '',
        card_id: '',
        user_id: '',
        grade: 0,
        shots: 0,
    }
}

export const setCardGrade = createAsyncThunk('assessment/setGrade', (data:ParamsData, {dispatch}) => {
    try {
        const res = assessmentAPI.setGrade(data)
        // dispatch(setCardsPackId())
        return res
    }catch (e) {

    }
})

const slice = createSlice({
    name: 'assessment',
    initialState: initialState,
    reducers: {
        setCardsPackId: (state, action: PayloadAction<string>) => {
            state.cardsPackId = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCardGrade.fulfilled, (state, action)=> {
            // @ts-ignore
            state.updatedGrade.cardsPack_id = action.payload.data.updatedGrade.cardsPack_id as string
        })
    }
})

export const assessmentReducer = slice.reducer