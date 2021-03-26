import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {User} from '../../user';
import {AppserviceService} from '../../appservice.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  user: User | undefined ;

  constructor(private route: ActivatedRoute , private  appService: AppserviceService) {
    const id = +this.route.snapshot.params.id;
    this.appService.getUser(id).subscribe(user => this.user = user);
    // params subscribing that are change in url
    this.route.params.subscribe((params: Params) => {
       this.appService.getUser(+params.id).subscribe(user => this.user = user);
    });

  }

  ngOnInit(): void {

  }

}
