import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialStateType = {
    isInitialized: boolean
    isLoading: boolean
}

const InitialState: InitialStateType = {
    isInitialized: false,
    isLoading: false
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
        }
    }
})

export const {setisInitialized,setisLoading} = slice.actions
export const loader = slice.reducer