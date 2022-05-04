import {instance} from "./instance";
import {IMG_PROFILE} from "../components/c1-main/m2-body/b3-profile/EditProfile/EditProfile";

export const profileAPI = {
    setNameAndImg(name: string,avatar: string = IMG_PROFILE){
        instance.put("auth/me",{name,avatar})
    }
}