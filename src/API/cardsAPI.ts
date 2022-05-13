import {instance} from "./instance";

export type CardType = {
    answer: string;
    question: string;
    cardsPack_id: string;
    grade: number;
    shots: number;
    user_id: string;
    created: string;
    updated: string;
    _id: string;
}

export type CardsListType = {
    cards: CardType[];
    cardsTotalCount: number;
    maxGrade: number;
    minGrade: number;
    page: number;
    pageCount: number;
    packUserId: string;
}

export type GetCardsParamsType = {
    cardAnswer?: string;
    cardQuestion?: string;
    cardsPack_id: string;
    min?: number;
    max?: number;
    sortCards?: string;
    page?: number;
    pageCount?: number;
}

export type PostCardParamsType = {
    cardsPack_id: string;
    question?: string;
    answer?: string;
    grade?: number; // 0..5, не обязателен
    shots?: number;
    answerImg?: "url" | "base 64";
    questionImg?: "url" | "base 64";
    questionVideo?: "url" | "base 64";
    answerVideo?: "url" | "base 64";
}

export type DeleteCardParamsType = {
    id: string;
}

export type PutCardParamsType = {
    _id: string;
    question?: string;
    comments?: string;
    grade?: number;
}

export const cardsAPI = {
    getCardsList(params: GetCardsParamsType) {
        return instance.get<CardsListType>('cards/card', {params});
    },
    postCard(card: PostCardParamsType) {
        return instance.post('cards/card', {card});
    },
    deleteCard(params: DeleteCardParamsType) {
        return instance.delete('cards/card', {params});
    },
    putCard(card: PutCardParamsType) {
        return instance.put('cards/card', {card});
    }
}
