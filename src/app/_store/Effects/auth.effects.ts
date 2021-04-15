import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import * as AuthAction from '../Actions/Auth.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AuthResponseData} from '../../_services/Auth.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {dispatch} from 'rxjs/internal/observable/pairs';

@Injectable()
export class AuthEffect {
    constructor(private action$: Actions,
                private http: HttpClient,
                private router: Router) {
    }

    // @ts-ignore
    authLogin$ = createEffect(() => {
         this.action$.pipe(
            ofType(AuthAction.LOGIN_START),
            switchMap((authData: AuthAction.LoginStart) => {
                return this.http.post<AuthResponseData>(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDmS3Xs9s1zA-OWYznlHIEE_ByCB3FlTk', {
                        email: authData.payload.email,
                        password: authData.payload.password,
                        returnSecureToken: true
                    }).pipe(
                    map(resData => {

                            const expiration = new Date(new Date().getTime() + +resData.expiresIn * 1000);
                            return of(new AuthAction.Login({
                                email: resData.email,
                                localId: resData.localId,
                                token: resData.idToken,
                                // @ts-ignore
                                expirationDate: expiration
                            }));
                        }
                    )),
                    catchError(error => {
                        //...
                        return of();
                    });
            })
        );
    });



    // @ts-ignore

    authSuccess$ = createEffect(() => {
         this.action$.pipe( ofType(AuthAction.LOGIN),
            tap(() => {
                this.router.navigate(['/']);

            })
        ) , { dispatch: false };
    });

}
