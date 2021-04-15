import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../../_services/appservice.service';
import {User} from '../../_interfaces/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    id: number | undefined;
    userData: User[] = [];
    didActive: boolean | undefined;


    constructor(private appService: AppserviceService, private route: Router) {
        console.log(!!sessionStorage.getItem('router'));
        if (sessionStorage.getItem('router')) {
            if (localStorage.getItem('router') === 'Home') {
                if (sessionStorage.getItem('Action') && (sessionStorage.getItem('Action') === 'routerLink')) {
                    const name = sessionStorage.getItem('value');
                    this.route.navigateByUrl('Home/HomeChild/' + name + '?allowEdit=' + name + '#loading');
                }

            } else {
                localStorage.setItem('router', 'Home');
            }
        } else {
            localStorage.setItem('router', 'Home');
            sessionStorage.setItem('router', 'Home');
        }


    }

    ngOnInit(): void {
        this.userData = this.appService.getUserData();
    }


    storingUserAction(name: string): void {
        sessionStorage.setItem('Action', 'routerLink');
        sessionStorage.setItem('value', name);
    }

    ngOnDestroy(): void {
        sessionStorage.removeItem('Action'),
            sessionStorage.removeItem('value');
    }


}
