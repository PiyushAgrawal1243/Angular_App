import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from '../user';
import {AppserviceService} from '../Services/appservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @ts-ignore
  user: User | undefined;

  constructor(private  routes: ActivatedRoute, private appService: AppserviceService) {
    const name = this.routes.snapshot.params.name;
    this.appService.getUser(name).subscribe(  (user) => { console.log(user); });
    console.log(this.user , "without subscribe");
  }

  ngOnInit(): void {
  }

}
