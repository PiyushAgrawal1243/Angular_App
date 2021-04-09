import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../../Services/appservice.service';
import {User} from '../../_interfaces/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    id: number | undefined;
    userData: User[] = [];
    didActive: boolean | undefined;


    constructor(private appService: AppserviceService, private route: Router) {
        console.log(!sessionStorage.getItem('router'));
        if (sessionStorage.getItem('router'))
        {
           this.route.navigate(['dashboard']);
        } else {
            if (localStorage.getItem('router') === 'Home') {
                if (localStorage.getItem('Action') && (localStorage.getItem('Action') === 'routerLink')) {
                    const name = localStorage.getItem('value');
                    this.route.navigateByUrl('Home/HomeChild/' + name + '?allowEdit=' + name + '#loading');
                }
            } else {
                localStorage.setItem('router', 'Home');
                sessionStorage.setItem('router', 'Home');
            }
        }


    }

    ngOnInit(): void {
        this.userData = this.appService.getUserData();
    }

    goHomeChild(id: number, Name: string): void {
// @ts-ignore
        this.route.navigate(['HomeChild', id, Name]);
    }

    storingUserAction(name: string): void {
        localStorage.setItem('Action', 'routerLink');
        localStorage.setItem('value', name);
    }


}
