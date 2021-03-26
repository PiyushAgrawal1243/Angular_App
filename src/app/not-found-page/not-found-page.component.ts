import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {
 errorMessage: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  // this.errorMessage = this.route.snapshot.data.message;
   this.route.data.subscribe(
     (data: Data) => {
       this.errorMessage = data.message;
     }
   )
  }

}
