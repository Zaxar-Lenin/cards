import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginAPI, LoginParamsType} from '../../API/loginAPI';

const InitialSate = {
    isLoggedIn: false
}

export const setIsLogged = createAction<{value: boolean}>('type/setIsAction')

export const loginTC = createAsyncThunk('login/loginTC', async (data: LoginParamsType, thunkAPI) => {
    try {
        const res = await loginAPI.login(data)
        thunkAPI.dispatch(setIsLogged({value: true}))
        //return {value: true}
    } catch (e) {
        //return {value: false}
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
        // builder.addCase(loginTC.fulfilled, (state, action) => {
        //      state.isLoggedIn = action.payload.value
        //  })
        builder.addCase(setIsLogged, (state, action)=>{
            state.isLoggedIn = action.payload.value;
        })
    }
})

export const loginReducer = slice.reducer
// export const {setIsLogged} = slice.actions
