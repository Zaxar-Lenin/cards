import {RootState} from '../store';

export const selectCardsList = (store: RootState) => store.cardsList.cardList
export const selectIsLoggedIn = (store: RootState) => store.login.isLoggedIn
export const selectCardsPackId = (store: RootState) => store.assessment.cardInfo?.cardsPack_id
export const selectAssessmentError = (store: RootState) => store.assessment.assessmentError