import {instance} from "./instance";
import {IMG_PROFILE} from "../store/reducers/s4_ProfileReducer";


export type UserProfile = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
}




export const profileAPI = {
    setNameAndImg(name: string,avatar: string = ''){
        return instance.put<{updatedUser: UserProfile,error: string}>("auth/me",{name,avatar})
    }
}