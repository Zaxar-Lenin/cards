import {instance} from './instance';

export const loginAPI = {
    login(data: LoginParamsType) {
        instance.post<ResponseType>('auth/login', data)
    },
}


export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

type ResponseType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    token: string;
    avatar: string;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    verified: boolean;
    error?: string;
    tokenDeathTime: number;
}