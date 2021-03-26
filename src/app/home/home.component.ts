import { Component, OnInit } from '@angular/core';
import {} from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id: number | undefined ;
  userData: User[] = [];

  constructor(private appService: AppserviceService) { }

  ngOnInit(): void {
   this.userData = this.appService.getUserData();
  }


}
