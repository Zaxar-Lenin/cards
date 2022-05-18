import {createSlice} from '@reduxjs/toolkit';

type InitialStateType = {
    grade: number
}

const initialState: InitialStateType = {
    grade: 0
}

const slice = createSlice({
    name: 'assessment',
    initialState: initialState,
    reducers: {

    },
})

export const assessmentReducer = slice.reducer