import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {profileAPI} from '../../API/profileAPI';
import {ResponseType} from "../../API/loginAPI"
import {setIsLogged} from './s1_LoginReducer';
import {setisInitialized, setisLoading, setisViewHeader} from './s9-AppReducer';

export const IMG_PROFILE = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"


const initial = {
    profile: {} as ResponseType
}

// type InitialType = typeof initial



export const updateNameAndImg = createAsyncThunk(
    'profile/updateNameAndImg',
    async ({avatar, name}: { avatar: string | undefined, name: string }, {dispatch}) => {
        try {
            const response = await profileAPI.setNameAndImg(name, avatar)
            return response.data.updatedUser
        }
        catch (e) {
        }
    }
)

export const setDataUser = createAsyncThunk(
    'profile/setDataUser',
    async (_, {dispatch}) => {
        dispatch(setisLoading({value: true}))
        try{
            const response = await profileAPI.authMe()
            dispatch(setIsLogged({value: true}))
            dispatch(setisInitialized({value: true}))
            dispatch(setisLoading({value: false}))
            dispatch(setisViewHeader({value: true}))
            return response.data
        }
        catch(e){
            dispatch(setisInitialized({value: true}))
        }

    }
)


export const slice = createSlice({
    name: "profile",
    initialState: initial,
    reducers: {
        setAllData(state, action: PayloadAction<ResponseType>){
            state.profile = action.payload
        }
    },
    extraReducers: {
        [updateNameAndImg.fulfilled.type]: (state, action: PayloadAction<ResponseType>) => {
            state.profile.avatar = action.payload.avatar
            state.profile.name = action.payload.name
        },
        [setDataUser.fulfilled.type]: (state, action: PayloadAction<ResponseType>) => {
            state.profile = action.payload
        }
    },
})


//reducer
export const profileReducer = slice.reducer


//action
export const {setAllData} = slice.actions


