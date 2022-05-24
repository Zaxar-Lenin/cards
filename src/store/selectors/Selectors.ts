import {RootState} from '../store';

export const selectCardsList = (store: RootState) => store.cardsList.cardList
export const selectIsLoggedIn = (store: RootState) => store.login.isLoggedIn
export const selectCardsPackId = (store: RootState) => store.assessment.cardInfo?.cardsPack_id
export const selectAssessmentError = (store: RootState) => store.assessment.assessmentError
export const selectStatus = (store: RootState) => store.assessment.status
export const selectIsLoading = (store: RootState) => store.app.isLoading
export const selectIsInitialized = (store: RootState) => store.app.isInitialized
export const selectIsViewHeader = (store: RootState) => store.app.isViewHeader
export const selectErrorMsg = (store: RootState) => store.login.errorMessage

export const selectUserId = (store: RootState) => store.profile.profile._id
export const selectCardPacks = (store: RootState) => store.packList.cardPacks
export const selectQuestion = (store: RootState) => store.cardsList.queryParams.cardQuestion
export const selectTotalCount = (store: RootState) => store.packList.cardPacksTotalCount
export const selectAmountPacks = (store: RootState) => store.packList.queryParams.pageCount
export const selectPage = (store: RootState) => store.packList.queryParams.page
export const selectSortPacks = (store: RootState) => store.packList.queryParams.sortPacks

export const selectName = (store: RootState) => store.profile.profile.name
export const selectAvatar = (store: RootState) => store.profile.profile.avatar
export const selectEmail = (store: RootState) => store.profile.profile.email

export const selectRegistrationSuccess = (store: RootState) => store.registration.registrationSuccess
export const selectRegistrationErrorMsg = (store: RootState) => store.registration.errorMessage

