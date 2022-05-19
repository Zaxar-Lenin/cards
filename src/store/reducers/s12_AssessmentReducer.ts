import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {assessmentAPI, ParamsData, UpdatedGradeType} from '../../API/assessmentAPI';

type InitialStateType = {
    assessmentError: string | null
    cardInfo: UpdatedGradeType | null
}

const initialState: InitialStateType = {
    assessmentError: null,
    cardInfo: null
}

export const setCardGrade = createAsyncThunk('assessment/setGrade', async (data:ParamsData, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setErrorMsg(''))
        const res = await assessmentAPI.setGrade(data)
        return res
    }catch (e: any) {
        return rejectWithValue(e.response.data.error)
    }
})

const slice = createSlice({
    name: 'assessment',
    initialState: initialState,
    reducers: {
        setErrorMsg: (state, action: PayloadAction<string>) => {
            state.assessmentError = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCardGrade.fulfilled, (state, action)=> {
            state.cardInfo = action.payload.updatedGrade as UpdatedGradeType
        })
        builder.addCase(setCardGrade.rejected, (state, action)=> {
            state.assessmentError = action.payload as string
        })
    }
})

export const {setErrorMsg} = slice.actions
export const assessmentReducer = slice.reducer