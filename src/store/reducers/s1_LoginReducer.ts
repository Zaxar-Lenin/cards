import {createSlice} from "@reduxjs/toolkit";

const initial = {}
type InitialType = typeof initial

type ActionLoginType = {
    type: string
}

const slice = createSlice({
    name: 'login',
    initialState: initial,
    reducers: {

    }
})


export const loginReducer = (state: InitialType = initial,action: ActionLoginType): InitialType => {
    switch (action.type) {
        default:
            return state
    }
}