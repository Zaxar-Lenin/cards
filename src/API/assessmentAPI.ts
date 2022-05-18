import {instance} from './instance';

export const assessmentAPI = {
    setGrade (data:ParamsData) {
        return instance.put('cards/grade', {data})
    }
}

type ParamsData = {
    grade: number,
    card_id: string
}

export type AssessmentResponseType = {

}