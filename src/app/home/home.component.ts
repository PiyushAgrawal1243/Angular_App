import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  didActive: boolean | undefined;

  constructor(private appService: AppserviceService , private  route: Router) {
    this.appService.activatedEmmiter.subscribe( active =>
    this.didActive = active );
  }

  ngOnInit(): void {
   this.userData = this.appService.getUserData();
  }

goHomeChild(id: number , Name: string): void{
// @ts-ignore
  this.route.navigate( ['HomeChild', id , Name]);
}

}
