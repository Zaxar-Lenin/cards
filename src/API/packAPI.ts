import {instance} from "./instance";


export type PackCards = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: false
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type PackLists = {
    cardPacks: PackCards[],
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,

}

export type GetParamsType = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string | null
}

export type PostParamsType = {
    name?: string;
    deckCover?: string;
    private?: boolean;

}
export type PostDataType = {
    name?: string;
    deckCover?: string;
    private?: boolean;
    packId: string

}
export type UpdateDataType = {
    name: string;
    _id: string;
    packId: string

}

export type DeleteParamsType = {
    id: string | undefined;

}
export type UpdateParamsType = {
    _id: string | undefined;
    name: string

}

export type DeleteDataType = {
    id: string | undefined;
    packId: string
}

export type PutParamsType = {
    cardsPack: {
        _id: string;
        name: string;
    }
}


export const packAPI = {
    getPackList(params: Partial<GetParamsType>) {
        return instance.get<PackLists>(`cards/pack`, {params})
            .then(res => res.data);
    },
    postPackList(cardsPack: PostParamsType) {
        return instance.post('cards/pack', {cardsPack});
    },
    deletePackList(params: DeleteParamsType) {
        return instance.delete('cards/pack',{params});
    },
    updatePackList(cardsPack: UpdateParamsType) {
        return instance.put('cards/pack', {cardsPack});
    }
}