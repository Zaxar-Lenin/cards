import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetParamsType, packAPI, PackCrards} from '../../API/packAPI';
import {RootState} from '../store';

export type Query = {
    cardPacksTotalCount: number | null,
    maxCardsCount: number | null,
    minCardsCount: number | null,
    page: number | null,
    pageCount: number | null,
    token: string | null,
    tokenDeathTime: number | null,
}

export type InitialStateType = {
    cardPacks: PackCrards[],
    queryParams: GetParamsType,

}

const InitialState: InitialStateType = {
    cardPacks: [],
    queryParams: {
        packName: '',
        min: 0,
        max: 0,
        sortPacks: "0update",
        page: 0,
        pageCount: 10,
        user_id: '',
    }

}


export const getPacksList = createAsyncThunk(
    'pack/getPacksList',
    async (_, {dispatch,getState,rejectWithValue}) => {
        try {
            const store = getState() as RootState
            const res = await packAPI.getPackList(store.packList.queryParams)
            return res
        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }

    })


const packSlice = createSlice({
    name: 'packList',
    initialState: InitialState,
    reducers: {
        updateSortPacks(state: InitialStateType,action: PayloadAction<string>){
            state.queryParams.sortPacks = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPacksList.fulfilled, (state, action) => {
            state.cardPacks = action.payload.cardPacks
        })
    }
})

export const packReducer = packSlice.reducer


export const {updateSortPacks} = packSlice.actions