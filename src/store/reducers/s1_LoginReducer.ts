import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {loginAPI, LoginParamsType} from '../../API/loginAPI';

const InitialSate = {
    isLoggedIn: false
}

export const loginTC = createAsyncThunk('login/loginTC', async (data: LoginParamsType, thunkAPI) => {
    try {
        const res = await loginAPI.login(data)
        return {value: true}
    } catch (e) {
        return {value: false}
    }
})

const slice = createSlice({
    name: 'login',
    initialState: InitialSate,
    reducers: {
        // setIsLogged(state, action: PayloadAction<{ value: boolean }>) {
        //     state.isLoggedIn = action.payload.value;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(loginTC.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload.value
        })
    }
})

export const loginReducer = slice.reducer
// export const {setIsLogged} = slice.actions
