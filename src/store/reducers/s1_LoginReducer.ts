import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loginAPI, LoginParamsType} from '../../API/loginAPI';
import {setAllData} from './s4_ProfileReducer';
import {setisInitialized, setisLoading, setisViewHeader} from './s9-AppReducer';

type InitialStateType = {
    isLoggedIn: boolean,
    info: null | string,
    errorMessage: null | string
    changePassMsg: string
}

const InitialState: InitialStateType = {
    isLoggedIn: false,
    info: null,
    errorMessage: null,
    changePassMsg: ''
}

export const setIsLogged = createAction<{ value: boolean }>('login/setIsLoggedIn')

export const loginTC = createAsyncThunk(
    'login/loginTC',
    async (data: LoginParamsType, {rejectWithValue, dispatch}) => {
        dispatch(setisLoading({value: true}))
        dispatch(setisInitialized({value: false}))
    try {
        const res = await loginAPI.login(data)
        dispatch(setAllData(res.data))
        dispatch(setIsLogged({value: true}))
        dispatch(setisViewHeader({value: true}))

    } catch (e: any) {
            return rejectWithValue(e.response.data.error)
    }finally {
        dispatch(setisInitialized({value: true}))
        dispatch(setisLoading({value: false}))
    }
})

export const resetPassword = createAsyncThunk('login/resetPassword', async (email: string, {dispatch, rejectWithValue}) => {
    try {
        const res = await loginAPI.resetPassword(email)
    } catch (e: any) {
        return rejectWithValue(e.response.data.error)
    }
})

export const setNewPassword = createAsyncThunk('login/setNewPassword', async (param: { newPass: string, token: string }, {dispatch, rejectWithValue}) => {
    try {
        const res = await loginAPI.setNewPassword(param.newPass, param.token)
        // thunkApi.dispatch(setAllData(res.data))
        dispatch(setIsLogged({value: false}))
        return res.data
    } catch (e: any) {
        return rejectWithValue(e.response.data.error)
    }
})

export const logOut = createAsyncThunk('login/logOut', async (_, {dispatch, getState, rejectWithValue}) => {
    try{
        const res = loginAPI.logOut()
        dispatch(setIsLogged({value: false}))
        dispatch(setisViewHeader({value: false}))
    }
    catch (e) {

    } finally {

    }
})


const slice = createSlice({
    name: 'login',
    initialState: InitialState,
    reducers: {
        // setIsLogged(state, action: PayloadAction<{ value: boolean }>) {
        //     state.isLoggedIn = action.payload.value;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(setIsLogged, (state, action) => {
            state.isLoggedIn = action.payload.value;
        })
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
        builder.addCase(setNewPassword.rejected, (state, action) => {
            // state.changePassMsg = action.payload
        })
        builder.addCase(loginTC.rejected, (state, action) => {
            state.errorMessage = action.payload as string
        })

    }
})

export const loginReducer = slice.reducer
// export const {setIsLogged} = slice.actions
