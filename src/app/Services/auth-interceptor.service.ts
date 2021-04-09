import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './Auth.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import {UserModel} from '../Models/User.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../Reducer/app.reducer';

@Injectable(
)
export class AuthInterceptorService implements  HttpInterceptor{
    constructor(private registerService: AuthService , private store: Store<fromApp.AppState>) {
    }
    // tslint:disable-next-line:typedef
    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.store.select('auth').pipe(
            take(1),
            map(authState => {
                return authState.user;
            }),
            exhaustMap( user => {
                if (!user)
                {
                    return  next.handle(req);
                }
                // @ts-ignore
                const modifiedreq = req.clone({params: new HttpParams().set('auth', user._token
                )});
                return next.handle(modifiedreq);
            })
        );

    }

}
