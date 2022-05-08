import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {registrationAPI} from '../../API/registrationAPI';

type InitialStateType = {
    registrationSuccess: boolean;
    errorMessage: null | string
}

const InitialState: InitialStateType = {
    registrationSuccess: false,
    errorMessage: null
}
export const registerUser = createAsyncThunk(
    'registration/registerUser',
    async (params: { email: string, password: string }, {dispatch, rejectWithValue}) => {
        try {
            const response = await registrationAPI.register({email: params.email, password: params.password});
            dispatch(successfulRegistration(true));
        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
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
    extraReducers: (builder)=>{
        builder.addCase(registerUser.rejected, (state, action) => {
            state.errorMessage = action.payload as string
        })
    }
})

const {successfulRegistration} = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;