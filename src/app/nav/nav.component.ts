import {Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef ,
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav.component2.css']
})


export class NavComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('title') title = '';

  // tslint:disable-next-line:no-output-rename
  @Output('newItemEvent') addItem = new EventEmitter<string>();

  status: string | undefined;

  // @ts-ignore
  @ViewChild('newItemInput') newItemInput: ElementRef;

  constructor( ) {
    console.log('constructor callled!');
    this.status = Math.random() > 0.5 ? 'online' : 'offline' ;
  }

  ngOnInit(): void {
    console.log('ngOnInIt callled!');
  }
  // tslint:disable-next-line:typedef
  addNewItem() {
    this.addItem.emit(this.newItemInput.nativeElement.value);
   // this.addItem.emit(this.newItemInput.nativeElement.value);
  }

  getColor(): string{
    return this.status === 'online' ? 'green' : 'red';
  }

  textColor(): string{
    return this.status === 'online' ? 'white' : 'yellow';
  }

  // scrollToTop(): void {
  //   window.scrollTo(0, 1000);
  // }

  // openDropDown(): void{
  //   // @ts-ignore
  //   document.getElementById('dropDownList').classList.add('class.open');
  // }

}


