import {instance} from "./instance";

export const registrationAPI = {
    register(data: RegistrationParamsType) {
        return instance.post<ResponseType>('/auth/register', data);
    }
}

export type RegistrationParamsType = {
    email: string;
    password: string;
}

type ResponseType = {
    addedUser: any;
    error?: string;
}