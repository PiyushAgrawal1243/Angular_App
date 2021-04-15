import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {UserModel} from '../Models/User.model';
import {AuthService} from './Auth.service';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import * as fromAuth from '../Reducer/app.reducer';

@Injectable()
export class AuthGuard implements CanActivate{
    result: boolean | undefined;

    constructor(
                private router: Router,
                private loginService: LoginService,
                private store: Store<fromAuth.AppState>) {
    }


    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // @ts-ignore
        return this.store.select('auth').pipe(
            take(1),
            map( authState => {
                console.log(authState , authState.user);
                return authState.user;
            }),
            // @ts-ignore
            map(user => {

                const isAuth = !!user;
                if (isAuth) {
                    this.loginService.userActive(true);
                    return true;
                } else {
                    this.router.navigate(['Angular.io']);
                }
            })
        );
    }

    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    //     Observable<boolean> | Promise<boolean> | boolean {
    //     return this.canActivate(route, state);
    // }
}
