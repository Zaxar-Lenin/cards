import {RootState} from '../store';

export const selectCardsList = (store: RootState) => store.cardsList.cardList
export const selectIsLoggedIn = (store: RootState) => store.login.isLoggedIn