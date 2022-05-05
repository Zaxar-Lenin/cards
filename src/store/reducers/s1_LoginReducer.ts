import {createAction, createAsyncThunk, createSlice, isRejectedWithValue} from '@reduxjs/toolkit';
import {loginAPI, LoginParamsType} from '../../API/loginAPI';

type InitialSateType = {
    isLoggedIn: boolean,
    info: null | string,
    errorMessage: null | string
    changePassMsg: string
}

const InitialSate: InitialSateType = {
    isLoggedIn: false,
    info: null,
    errorMessage: null,
    changePassMsg: ''
}

export const setIsLogged = createAction<{ value: boolean }>('login/setIsLoggedIn')

export const loginTC = createAsyncThunk('login/loginTC', async (data: LoginParamsType, thunkAPI) => {
    try {
        const res = await loginAPI.login(data)
        thunkAPI.dispatch(setIsLogged({value: true}))
        //return {value: true}
    } catch (e) {
        //return {value: false}
    }
})

export const resetPassword = createAsyncThunk('login/resetPassword', async (email: string, thunkApi) => {
    try {
        const res = await loginAPI.resetPassword(email)
    } catch (e: any) {
        return thunkApi.rejectWithValue(e.response.data.error)
    }
})

export const setNewPassword = createAsyncThunk('logins/setNewPassword', async (param: { newPass: string, token: string }, thunkApi) => {
    try {
        const res = await loginAPI.setNewPassword(param.newPass, param.token)
        return res.data
    } catch (e) {

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
        builder.addCase(setIsLogged, (state, action) => {
            state.isLoggedIn = action.payload.value;
        })
        // builder.addCase(setResetPassword, (state, action) => {
        //     state.info = action.payload.info as string
        // })
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.info = action.payload ? action.payload : ''
            state.errorMessage = ''
        })
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.errorMessage = action.payload as string
        })
        builder.addCase(setNewPassword.fulfilled, (state, action) => {
            // state.changePassMsg = action.payload
        })
    }
})

export const loginReducer = slice.reducer
// export const {setIsLogged} = slice.actions
