import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {LoginService} from './login.service';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {UserModel} from '../Models/User.model';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import * as fromApp from '../Reducer/app.reducer';
import * as AuthAction from '../Reducer/Auth.action';
import {Login} from '../Reducer/Auth.action';

// tslint:disable-next-line:no-empty-interface
interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    // @ts-ignore
    //user = new BehaviorSubject<UserModel>(null);
    private tokenExpirationTimer: any;


    constructor(private  http: HttpClient,
                private loginService: LoginService,
                private router: Router,
                private store: Store<fromApp.AppState>) {
    }

    signUp(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDmS3Xs9s1zA-OWYznlHIEE_ByCB3FlTk',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.errorHandler), tap(resdata => {
            this.handleAuthentication(
                resdata.email,
                resdata.localId,
                resdata.idToken,
                +resdata.expiresIn);

        }));
    }

    autoLogin(): void{
        const user: UserModel = JSON.parse(<string> localStorage.getItem('user'));
        // @ts-ignore
        this.store.dispatch(new AuthAction.Login({email: user.email, localId: user.localId, token: user._token, expirationDate: user._tokenExperiationDate}));
    }
    login(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDmS3Xs9s1zA-OWYznlHIEE_ByCB3FlTk', {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.errorHandler), tap(resdata => {
            this.handleAuthentication(
                resdata.email,
                resdata.localId,
                resdata.idToken,
                +resdata.expiresIn);

        }));
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number): void {

        const expiration = new Date(new Date().getTime() + expiresIn * 1000);
        // @ts-ignore
        const user = new UserModel(email, userId, token, expiration);
        // this.user.next(user);
        // @ts-ignore
        this.store.dispatch(new AuthAction.Login({email, localId: userId, token, expirationDate: expiration}));

        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('user', JSON.stringify(user));
    }

    private errorHandler(error: HttpErrorResponse): Observable<AuthResponseData> {
        let errorMessage = 'A unknown error occured';
        if (!error.error || !error.error.error) {
            return throwError(errorMessage);
        }
        switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Email alredy exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid Password';
        }
        return throwError(errorMessage);
    }


    logout(): void {
        this.store.dispatch(new AuthAction.Logout());
        localStorage.removeItem('user');
        this.loginService.userActive(false);
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        localStorage.setItem('router', 'RegitserLogin');
        this.router.navigate(['RegitserLogin']);

    }

    autoLogout(expiration: number): void {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expiration);


    }


}
