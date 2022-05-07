import {AppDispatch} from "../store";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {registrationAPI, RegistrationParamsType} from "../../API/registrationAPI";
import {instance} from "../../API/instance";

type InitialStateType = {
    registrationSuccess: boolean;
}

const InitialState: InitialStateType = {
    registrationSuccess: false
}
export const registerUser = createAsyncThunk(
    'registration/registerUser',
    async (params: { email: string, password: string }, {dispatch, rejectWithValue}) => {
        try {
            const response = await registrationAPI.register({email: params.email, password: params.password});
            dispatch(successfulRegistration(true));
        } catch (e: any) {

        }
    }
)

const registrationSlice = createSlice({
    name: 'registration',
    initialState: InitialState,
    reducers: {
        successfulRegistration: (state, action: PayloadAction<boolean>) => {
            state.registrationSuccess = action.payload;
        }
    },
})

const {successfulRegistration} = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;