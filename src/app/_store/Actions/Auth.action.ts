import {Action} from '@ngrx/store';

export const  LOGIN_START = 'LOGIN_START';
export  const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class Login implements Action {
    readonly type = LOGIN;

    constructor(public payload: { email: string, localId: string, token: string, expirationDate: number }) {
    }
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class LoginStart implements  Action {
    readonly  type = LOGIN_START;

    constructor(public payload: {email: string , password: string}) {
    }
}

export  class LoginFail implements  Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: string) {
    }
}


export type AuthAction = Login | Logout | LoginStart | LoginFail;
