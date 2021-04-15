import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

export interface CanComponentDectivate{
    canDeactive: Observable<boolean> | Promise<boolean> | boolean;
}

// tslint:disable-next-line:class-name
export  class CanDectivate_guardService implements CanDeactivate<CanComponentDectivate> {

    canDeactivate(component: CanComponentDectivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // @ts-ignore
        return  component.canDeactive();

    }

}
