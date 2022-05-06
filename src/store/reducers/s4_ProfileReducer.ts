import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProfile} from '../../API/profileAPI';
import {updateNameAndImg} from '../../API/thunk';

export const IMG_PROFILE = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"

type InitialType = {
    name: string,
    email: string,
    avatar: string | undefined
}

const initial: InitialType= {
    name: "",
    email: "",
    avatar: IMG_PROFILE,
}


export const slice = createSlice({
    name: "profile",
    initialState: initial,
    reducers: {},
    extraReducers: {
        [updateNameAndImg.fulfilled.type]: (state, action: PayloadAction<UserProfile>) => {
            state.name = action.payload.name
            state.avatar = action.payload.avatar
        }
    },
})


//reducer
export const profileReducer = slice.reducer


//action
const {} = slice.actions


