import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setisInitialized, setisLoading} from './s9-AppReducer';
import {GetParamsType, packAPI, PackCrards} from "../../API/packAPI";
import {AppRootStateType, RootState} from "../store";

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

            const {packList} = getState() as RootState
            const res = await packAPI.getPackList(packList.queryParams)
            return res

        } catch (e: any) {
            return rejectWithValue(e.response.data.error)
        }
    })


const packSlice = createSlice({
    name: 'packList',
    initialState: InitialState,
    reducers: {
        // setIsLogged(state, action: PayloadAction<{ value: boolean }>) {
        //     state.isLoggedIn = action.payload.value;
        // }
    },
    extraReducers: {
        [getPacksList.fulfilled.type]: (state, action: PayloadAction<PackLists>) => {
            state.cardPacks = action.payload.cardPacks
        }
    }
})

export const packReducer = packSlice.reducer
// export const {setIsLogged} = slice.actions
