import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetParamsType, packAPI, PackCrards, PackLists} from '../../API/packAPI';
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
        sortPacks: 0,
        page: 0,
        pageCount: 0,
        user_id: '',
    }

}


export const getPacksList = createAsyncThunk(
    'pack/getPacksList',
    async (_, {dispatch,getState,rejectWithValue}) => {
        try {
            //закоментил пока, чтобы не падало приложение
            // const {packList} = getState()
            // const res = await packAPI.getPackList(packList.queryParams)
            // return res

        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }
    })


const slice = createSlice({
    name: 'packList',
    initialState: InitialState,
    reducers: {
    },
    extraReducers: {
        [getPacksList.fulfilled.type]: (state, action: PayloadAction<PackLists>) => {
            state.cardPacks = action.payload.cardPacks
        }
    }
})

export const packReducer = slice.reducer
// export const {setIsLogged} = slice.actions
