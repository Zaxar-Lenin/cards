import {instance} from "./instance";


export type PackCrards = {
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
    cardPacks: PackCrards[],
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
    user_id: string
}


export const packAPI = {
    getPackList(params: Partial<GetParamsType>) {
        return instance.get<PackLists>(`cards/pack`, {params})
            .then(res => res.data)
    },

}