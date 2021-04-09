import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppserviceService} from '../Services/appservice.service';
import {User} from '../user';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    id: number | undefined;
    userData: User[] = [];
    didActive: boolean | undefined;

    private activatedSub: Subscription;

    constructor(private appService: AppserviceService, private  route: Router) {
        this.activatedSub = this.appService.activatedEmmiter.subscribe(active =>
            this.didActive = active);
    }

    ngOnInit(): void {
        this.userData = this.appService.getUserData();
    }

    goHomeChild(id: number, Name: string): void {
// @ts-ignore
        this.route.navigate(['HomeChild', id, Name]);
    }

    ngOnDestroy(): void {
        this.activatedSub.unsubscribe();
    }

}
