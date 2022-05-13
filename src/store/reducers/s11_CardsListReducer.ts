import {cardsAPI, CardsListType, CardType, GetCardsParamsType, PutCardParamsType} from "../../API/cardsAPI";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type InitialStateType = {
    cardList: CardsListType;
    queryParams: GetCardsParamsType;
}

const InitialState: InitialStateType = {
    cardList: {
        cards: [],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 0,
        pageCount: 0,
        packUserId: ''
    },
    queryParams: {
        cardAnswer: '',
        cardQuestion: '',
        cardsPack_id: '',
        min: 0,
        max: 0,
        sortCards: '',
        page: 0,
        pageCount: 0
    }
}

export const getCardsList = createAsyncThunk(
    'cards/getCardsList',
    async (_, {dispatch, getState, rejectWithValue}) => {
        try {
            const store = getState() as RootState;
            const res = await cardsAPI.getCardsList(store.cardsList.queryParams);
            return res;
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        }
    }
)

export const putCardsList = createAsyncThunk(
    'cards/putCard',
    async (data: PutCardParamsType, {dispatch, rejectWithValue}) => {
        try {
            await cardsAPI.putCard({_id: data._id, grade: data.grade});
            //dispatch(getCardsList());
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        }
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState: InitialState,
    reducers: {
        setPackId: (state, action:PayloadAction<string>) => {
            state.queryParams.cardsPack_id = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCardsList.fulfilled, (state, action) => {
            state.cardList = action.payload.data;
        });
    }
})

export const {setPackId} = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;