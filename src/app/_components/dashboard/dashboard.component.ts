import {Component, OnInit, Input, ViewEncapsulation, AfterViewInit, AfterViewChecked, DoCheck ,} from '@angular/core';
import {AppserviceService} from '../../_services/appservice.service';
import {User} from '../../_interfaces/user';
import {Users} from '../../_interfaces/Users';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { from } from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit , DoCheck {


    state = 'normal';
    userData: User[] = [];
    loadedData: Users[] = [];
    spinner: boolean | undefined;

    constructor(private  appService: AppserviceService) {
        localStorage.setItem('router', 'dashboard' );

    }
    ngDoCheck(): void {
        if (this.loadedData.length > 0)
        {
            this.spinner = true;
        } else {
            this.spinner = false;
        }
    }

    ngOnInit(): void {
        this.userData = this.appService.getUserData();
        this.appService.getDataFromServer().subscribe(data => this.loadedData = data);
        const objects = [
            { id: 1, name: 'Fabian' },
            { id: 2, name: 'Jan-Niklas' },
        ];

        const source$ = from(objects)
            .pipe(tap((item) => (item.name = item.name + '_2')))
            .subscribe((x) => console.log(x));
    }


    addItemToItemList(item: string): void {
        this.appService.addItem(item);
    }

    removeItem(item: string): void {
        this.appService.removeItem(item);
    }

}
