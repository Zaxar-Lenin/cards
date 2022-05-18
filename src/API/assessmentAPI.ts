import {instance} from './instance';

export const assessmentAPI = {
    setGrade (data:ParamsData) {
        return instance.put<UpdatedGradeType>('cards/grade', data)
    }
}

export type ParamsData = {
    grade: number,
    card_id: string
}

export type AssessmentResponseType = {
    updatedGrade: UpdatedGradeType
}

export type UpdatedGradeType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
}