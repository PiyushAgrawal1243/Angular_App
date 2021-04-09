import {Component, OnInit} from '@angular/core';
import {AppserviceService} from './Services/appservice.service';
import {Router} from '@angular/router';
import {LoginService} from './Services/login.service';
import {AuthService} from './Services/Auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'Angular';
    user: boolean | undefined;
    Item: string[] = [];
    modalTitle: string | undefined;
    modalMessage: string | undefined;
    subscribe: boolean | undefined;

    constructor(private appSerVice: AppserviceService,
                private authService: AuthService,
                private  router: Router, private loginService: LoginService) {
        this.loginService.title.subscribe(data => this.modalTitle = data);
        this.loginService.message.subscribe(data => this.modalMessage = data);
        this.loginService.activatedUser.subscribe(resdata => this.subscribe = resdata);


    }

    ngOnInit(): void {
        this.authService.autoLogin();
        this.getItem();
        if (this.subscribe) {
            this.router.navigate(['dashboard']);
        } else if (localStorage.getItem('user') == null) {
            // @ts-ignore
            localStorage.getItem('router', 'Angular.io');
            this.router.navigate([localStorage.getItem('router')]);

        } else {
            const data = localStorage.getItem('router');
            this.router.navigate([data]);

        }

    }

    getItem(): void {
        this.Item = this.appSerVice.getItem();
    }

    addItem(item: string): void {
        this.Item.push(item);
    }


}
