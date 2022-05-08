import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialStateType = {
    isInitialized: boolean
}

const InitialState: InitialStateType = {
    isInitialized: false

}

export const slice = createSlice({
    name: 'loader',
    initialState: InitialState,
    reducers: {
        setisInitialized: (state, action: PayloadAction<{ value: boolean }>) => {
            state.isInitialized = action.payload.value
        }
    }
})

export const {setisInitialized} = slice.actions
export const loader = slice.reducer