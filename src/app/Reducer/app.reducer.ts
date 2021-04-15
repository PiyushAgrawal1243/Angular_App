import * as  fromAuth from './Auth.reducer';
import { ActionReducerMap} from '@ngrx/store';

export interface AppState {
    auth: fromAuth.State;
}



export  const appReducer: ActionReducerMap<AppState> = {
    // @ts-ignore
    auth: fromAuth.AuthReducer,
};
