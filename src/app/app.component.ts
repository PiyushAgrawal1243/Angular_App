import { Component , OnInit } from '@angular/core';
import {AppserviceService} from './appservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  Item: string[] = [];

  value = 100;
   // Displays 'Dr IQ', '<no name set>', 'Bombasto'
   image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp6-re94SyZb-6tmYjAvNrxJaLG1CtozyUw&usqp=CAU';

   evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
   constructor(private appSerVice: AppserviceService) {

   }
  // tslint:disable-next-line:use-lifecycle-interface
   ngOnInit(): void{
     this.getItem();
   }
   getItem(): void{
     this.Item = this.appSerVice.getItem();
   }
   addItem(item: string): void{
     this.Item.push(item);
   }

}
