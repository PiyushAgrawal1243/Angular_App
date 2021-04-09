import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../_interfaces/user';
import {Observable} from 'rxjs';
import {AppserviceService} from './appservice.service';

@Injectable({providedIn: 'root'})
export class ResolverService implements Resolve<User[]> {
    constructor(private appService: AppserviceService) {
    }

    // @ts-ignore
    // tslint:disable-next-line:typedef
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.appService.getUserData();
    }
}
