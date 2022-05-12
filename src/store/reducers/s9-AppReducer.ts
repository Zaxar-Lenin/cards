import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialStateType = {
    isInitialized: boolean
    isLoading: boolean
    isViewHeader: boolean
}

const InitialState: InitialStateType = {
    isInitialized: false,
    isLoading: false,
    isViewHeader: false
}

export const slice = createSlice({
    name: 'loader',
    initialState: InitialState,
    reducers: {
        setisInitialized: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isInitialized = action.payload.value
        },
        setisLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isLoading = action.payload.value
        },
        setisViewHeader: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isViewHeader = action.payload.value
    }
}})

export const {setisInitialized,setisLoading, setisViewHeader} = slice.actions
export const loader = slice.reducer