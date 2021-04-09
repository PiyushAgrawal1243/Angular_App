import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from '../../user';
import {AppserviceService} from '../../Services/appservice.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  user: User | undefined ;

  constructor(private route: ActivatedRoute , private  appService: AppserviceService) {
    const name = this.route.snapshot.params.name;
    this.appService.getUser(name).subscribe(user => this.user = user);

    // params subscribing that are change in url
    this.route.params.subscribe((params: Params) => {
       this.appService.getUser(params.name).subscribe(user => this.user = user);
    });

  }

  ngOnInit(): void {

  }

}
