import {instance} from "./instance";
import {IMG_PROFILE} from "../store/reducers/s4_ProfileReducer";
import {ResponseType} from "./loginAPI"

export const profileAPI = {
    setNameAndImg(name: string,avatar: string = IMG_PROFILE){
        return instance.put<{updatedUser: ResponseType}>("auth/me",{name,avatar})
    },
    authMe(){
        return instance.post<{addedUser: ResponseType}>("auth/me",{})
    }
}