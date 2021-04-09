import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.css']
})
export class AppHomePageComponent implements OnInit {

  image = 'https://www.careeraddict.com/uploads/article/56896/tokyo-skyline.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  animation(){
    // @ts-ignore
    if (document.getElementById('bottomCard').classList.contains('Active')) {
      // @ts-ignore
      document.getElementById('bottomCard').classList.remove('Active');
      // @ts-ignore
      document.getElementById('arrow').classList.remove('carousel-control-next-icon');
      // @ts-ignore
      document.getElementById('arrow').classList.add('carousel-control-prev-icon');
      // @ts-ignore
      document.getElementById('bottomCard').classList.add('Not-Active');

    }
    else {
      // @ts-ignore
      document.getElementById('bottomCard').classList.remove('Not-Active');
      // @ts-ignore
      document.getElementById('arrow').classList.remove('carousel-control-prev-icon');
      // @ts-ignore
      document.getElementById('arrow').classList.add('carousel-control-next-icon');
      // @ts-ignore
      document.getElementById('bottomCard').classList.add('Active');
    }
  }
}
