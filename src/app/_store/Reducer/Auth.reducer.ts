import {UserModel} from '../../_models/User.model';
import * as AuthAction from '../Actions/Auth.action';

export interface  State{
    user: UserModel;
    authError: string;
    loading: boolean;
}

const initialState = {
    user: null,
    authError: null,
    loading: false,
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
            return{...state, authError: null, user , loading: false};


        case AuthAction.LOGOUT:
            return {...state, authError: null, user: null};

        case AuthAction.LOGIN_START:
            return {...state, authError: null , loading: true};
// @ts-ignore
        case AuthAction.LoginFail:
            // @ts-ignore
            return { ...state , user: null , authError: action.payload  };
        default:
            return state;
    }
}
