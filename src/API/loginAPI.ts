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
            <a href='https://zaxar-lenin.github.io/cards/#/login/newpassword/$token$'>
            link</a>
            </div>`
        })
    },
    setNewPassword(newPass: string, passwordToken: string){
        return instance.post('/auth/set-new-password', {password:newPass, resetPasswordToken: passwordToken})
    },
    logOut(){
        return instance.delete('/auth/me')
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ResponseType = {
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