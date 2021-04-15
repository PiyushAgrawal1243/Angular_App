import {UserModel} from '../Models/User.model';
import * as AuthAction from './Auth.action';

export interface  State{
    user: UserModel;
}

const initialState = {
    user: null,
};


// @ts-ignore
// tslint:disable-next-line:typedef
export function AuthReducer(state = initialState, action: AuthAction.AuthAction)
{

    switch (action.type)
    {
        case AuthAction.LOGIN:

            const user = new UserModel(
                action.payload.email,
                action.payload.localId,
                action.payload.token,
                // @ts-ignore
                action.payload.expirationDate);
            return{ ...state, user};


        case AuthAction.LOGOUT:
            return {...state, user: null};
        default:
            return state;
    }
}
