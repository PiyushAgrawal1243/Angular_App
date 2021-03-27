import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private  appService: AppserviceService) { }

  ngOnInit(): void {
  }

  onActivate(): void
  {
    this.appService.activatedEmmiter.next(true);
  }
}
