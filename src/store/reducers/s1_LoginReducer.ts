import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const InitialSate = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'login',
    initialState: InitialSate,
    reducers: {
        setIsLogged(state,action: PayloadAction<{value: boolean}>){
        state.isLoggedIn = action.payload.value;
        }
    }
})

export const loginReducer = slice.reducer
export const {setIsLogged} = slice.actions
