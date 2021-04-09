import { Component, OnInit , Input, ViewEncapsulation } from '@angular/core';
import {AppserviceService} from '../Services/appservice.service';
import {User} from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  @Input() Image = '';

  userData: User[] = [];

  constructor( private  appService: AppserviceService) { }

  ngOnInit(): void {
    this.userData = this.appService.getUserData();
  }

  addItemToItemList(item: string): void{
    this.appService.addItem(item);
  }
  removeItem(item: string): void{
    this.appService.removeItem(item);
  }

}
