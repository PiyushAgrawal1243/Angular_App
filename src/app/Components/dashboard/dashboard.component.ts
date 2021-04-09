import {Component, OnInit, Input, ViewEncapsulation, AfterViewInit, AfterViewChecked, DoCheck ,} from '@angular/core';
import {AppserviceService} from '../../Services/appservice.service';
import {User} from '../../_interfaces/user';
import {Users} from '../../_interfaces/Users';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { from } from 'rxjs';
import {map, tap} from 'rxjs/operators';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        trigger('divState', [
            state('normal', style({
                'background-color': 'red',
                transfrom: 'translateX(0)',
            })),
            state('highlighted' , style({
                'background-color': 'blue',
                transfrom: 'translateX(100px)',
            })),
            transition('normal <=> highLighted' , animate(300))
        ]),

    ]
    // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit , DoCheck {


    state = 'normal';
    @Input() Image = '';
    userData: User[] = [];
    loadedData: Users[] = [];
    spinner: boolean | undefined;

    constructor(private  appService: AppserviceService) {


    }
    ngDoCheck(): void{
        if (this.loadedData.length > 0)
        {
            this.spinner = true;
        } else {
            this.spinner = false;
        }
        this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
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
