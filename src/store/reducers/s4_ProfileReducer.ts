import {createSlice} from "@reduxjs/toolkit";

const initial = {}
type InitialType = typeof initial

type ActionProfileType = {
    type: string
}

const slice = createSlice({
    name: "profile",
    initialState: initial,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(updateProfile,)
    }
})


//reducer
const profileReducer = slice.reducer


//action

const {} = slice.actions