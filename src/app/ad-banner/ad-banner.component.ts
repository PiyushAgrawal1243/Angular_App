import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  template: `
  <div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template adHost></ng-template>
  </div>
`,
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
