import {Component,
  OnInit,
  Input,
  Output,
  OnChanges ,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  ViewChild,
  ElementRef ,
  SimpleChanges,
  ContentChild
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav.component2.css']
})


export class NavComponent implements OnInit ,
  OnChanges ,
  DoCheck ,
  AfterContentInit ,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('title') title = '';

  // tslint:disable-next-line:no-output-rename
  @Output('newItemEvent') addItem = new EventEmitter<string>();

  status: string | undefined;

  // @ts-ignore
  @ViewChild('newItemInput') newItemInput: ElementRef;

  // @ts-ignore
  @ContentChild('content') paragraph: ElementRef;
  constructor( ) {
    console.log('constructor callled!');
    this.status = Math.random() > 0.5 ? 'online' : 'offline' ;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges run !');
    console.log(changes);
}

  ngOnInit(): void {
    console.log('ngOnInIt callled!');
    console.log('Contemt of' + this.paragraph.nativeElement.textContent);
  }
  // @ts-ignore
  ngDoCheck(): void{
    console.log('Docheck run now');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void{
    console.log('AfterContentINIT called');
    console.log('Contemt of' + this.paragraph.nativeElement.textContent);
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

  ngAfterContentChecked(): void {
    console.log('AfterContentcheck run');
  }

  ngAfterViewInit(): void{
    console.log('AfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewcheck run');
  }
ngOnDestroy(): void{
    console.log('ngOnDestroy run now');
}

  scrollToTop(): void {
    window.scrollTo(0, 1000);
  }

  // openDropDown(): void{
  //   // @ts-ignore
  //   document.getElementById('dropDownList').classList.add('class.open');
  // }

}


