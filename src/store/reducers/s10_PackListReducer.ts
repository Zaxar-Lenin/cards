import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DeleteParamsType, GetParamsType, packAPI, PackCrards, PostParamsType} from '../../API/packAPI';
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
    cardPacksTotalCount: number | null,
    cardPacks: PackCrards[],
    queryParams: GetParamsType,

}

const InitialState: InitialStateType = {
    cardPacksTotalCount: null,
    cardPacks: [],
    queryParams: {
        packName: '',
        min: 0,
        max: 0,
        sortPacks: '',
        page: 1,
        pageCount: 10,
        user_id: '',
    }

}


export const getPacksList = createAsyncThunk(
    'packList/getPacksList',
    async (_, {dispatch, getState, rejectWithValue}) => {
        try {
            const store = getState() as RootState;
            const res = await packAPI.getPackList(store.packList.queryParams);
            dispatch(setTotalCount(res.cardPacksTotalCount))
            return res;
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        }
    })

export const addPackList = createAsyncThunk(
    'packList/addPackList',
    async (data: PostParamsType, {dispatch, rejectWithValue}) => {
        try {
            await packAPI.postPackList(
                {
                    name: data.name,
                    deckCover: data.deckCover,
                    private: data.private
                }
            )
            dispatch(getPacksList());
        } catch (e: any) {

        }
    }
)

export const deletePackList = createAsyncThunk(
    'packList/deletePackList',
    async (data: DeleteParamsType, {dispatch, rejectWithValue}) => {
        try {
            await packAPI.deletePackList({id: data.id});
            dispatch(getPacksList());
        } catch (e: any) {
        }
    })


const packSlice = createSlice({
    name: 'packList',
    initialState: InitialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.queryParams.packName = action.payload;

        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.cardPacksTotalCount = action.payload;

        },
        setPage: (state, action: PayloadAction<number>) => {
            state.queryParams.page = action.payload;

        },
        updateSortPacks(state: InitialStateType, action: PayloadAction<string>) {
            state.queryParams.sortPacks = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPacksList.fulfilled, (state, action) => {
            state.cardPacks = action.payload.cardPacks
        })
    }
})


export const {setTotalCount, setSearchValue, updateSortPacks, setPage} = packSlice.actions
export const packReducer = packSlice.reducer
