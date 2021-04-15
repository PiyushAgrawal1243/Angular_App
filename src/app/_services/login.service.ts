import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Modal} from '../_interfaces/modal';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    activatedUser = new Subject<boolean>();
    title = new Subject<string>();
    message = new Subject<string>();

    // tslint:disable-next-line:typedef
    userActive(value: boolean) {
        this.activatedUser.next(value);
    }

    // @ts-ignore
    modalData(title: string, message: string): void{
        this.title.next(title);
        this.message.next(message);
    }


}
