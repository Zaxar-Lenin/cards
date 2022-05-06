import {instance} from './instance';

export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType>('auth/login', data)
    },
    resetPassword(email: string) {
        return instance.post('auth/forgot', {
            email: email,
            from: 'test-front-admin <ai73a@yandex.by>',
            message: `<div style="background-color: lime; padding: 15px">
            password recovery link: 
            <a href='https://neko-back.herokuapp.com/2.0/#/set-new-password-/$token$'>
            link</a>
            </div>`
        })
    },
    setNewPassword(newPass: string, passwordToken: string){
        return instance.post('/auth/set-new-password', {password:newPass, resetPasswordToken: passwordToken})
    }
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