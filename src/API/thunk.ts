import {createAsyncThunk} from "@reduxjs/toolkit";
import {profileAPI} from "./profileAPI";




export const updateNameAndImg = createAsyncThunk(
    'profile/updateNameAndImg',
    async ({avatar, name}: { avatar: string | undefined, name: string }, thunkAPI) => {
        const response = await profileAPI.setNameAndImg(name, avatar)
        return response
    }
)