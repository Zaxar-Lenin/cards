import {
    cardsAPI,
    CardsListType,
    CardType, DeleteCardParamsType,
    GetCardsParamsType,
    PostCardParamsType,
    PutCardParamsType
} from "../../API/cardsAPI";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {setisLoading} from './s9-AppReducer';

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
    async (params: Partial<GetCardsParamsType>, {dispatch, getState, rejectWithValue}) => {
        try {
            dispatch(setisLoading({value: true}))
            const store = getState() as RootState;
            const queryParams = store.cardsList.queryParams;
            const res = await cardsAPI.getCardsList({
                cardAnswer: queryParams.cardAnswer,
                cardQuestion: queryParams.cardQuestion,
                cardsPack_id: params.cardsPack_id ? params.cardsPack_id : queryParams.cardsPack_id,
                min: queryParams.min,
                max: queryParams.max,
                sortCards: queryParams.sortCards,
                page: queryParams.page,
                pageCount: queryParams.pageCount
            });
            return res;
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        } finally {
            dispatch(setisLoading({value: false}))
        }
    }
)

export const postCard = createAsyncThunk(
    'cards/postCard',
    async (data: PostCardParamsType, {dispatch, rejectWithValue}) => {
        try {
            await cardsAPI.postCard({
                cardsPack_id: data.cardsPack_id,
                question: data.question ? data.question : "no question",
                answer: data.answer ? data.answer : "no answer",
                grade: data.grade,
                shots: data.shots,
                answerImg: data.answerImg,
                questionImg: data.questionImg,
                questionVideo: data.questionVideo,
                answerVideo: data.answerVideo
            })
            //dispatch(getCardsList({}));
        } catch (e: any) {

        }
    }
)

export const putCardsList = createAsyncThunk(
    'cards/putCard',
    async (data: PutCardParamsType, {dispatch, rejectWithValue}) => {
        try {
            await cardsAPI.putCard({_id: data._id, grade: data.grade});
            dispatch(getCardsList({}));
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        }
    }
)

export const deleteCard = createAsyncThunk(
    'cards/deleteCard',
    async (data: DeleteCardParamsType, {dispatch, rejectWithValue}) => {
        try {
            await cardsAPI.deleteCard({id: data.id});
        } catch (e: any) {
            return rejectWithValue(e.response.data.error);
        }
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState: InitialState,
    reducers: {
        setPackId: (state, action: PayloadAction<string>) => {
            state.queryParams.cardsPack_id = action.payload;
        },
        setSearchCardsValue: (state, action:PayloadAction<string>) => {
            state.queryParams.cardQuestion = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCardsList.fulfilled, (state, action) => {
            state.cardList = action.payload.data;
        });
    }
})

export const {setPackId, setSearchCardsValue} = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;