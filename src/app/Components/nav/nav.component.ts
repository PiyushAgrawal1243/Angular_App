import {Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef ,
} from '@angular/core';
import {LoginService} from '../../Services/login.service';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/Auth.service';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './nav.component2.css']
})


export class NavComponent implements OnInit {

  loginNav: boolean | undefined;

  // tslint:disable-next-line:no-input-rename
  @Input('title') title = '';

  // tslint:disable-next-line:no-output-rename
  @Output('newItemEvent') addItem = new EventEmitter<string>();

  status: string | undefined;

  // @ts-ignore
 // @ViewChild('newItemInput') newItemInput: ElementRef;

  constructor( private loginService: LoginService ,
               private authService: AuthService,
               private router: Router) {
    console.log('constructor callled!');
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
    // @ts-ignore
    this.loginService.activatedUser.subscribe(data => this.loginNav = data);
  }

  ngOnInit(): void {
    console.log('ngOnInIt callled!');
  }
  // tslint:disable-next-line:typedef
 // addNewItem() {
   // this.addItem.emit(this.newItemInput.nativeElement.value);
   // this.addItem.emit(this.newItemInput.nativeElement.value);
 // }

  getColor(): string{
    return this.status === 'online' ? 'green' : 'red';
  }

  textColor(): string{
    return this.status === 'online' ? 'white' : 'yellow';
  }

  Logout(): void{
    this.authService.logout();
  }

  navigateToRegisterLogin(): void{
    this.router.navigate([localStorage.getItem('router')]);
  }
  navigateToHome(): void{
    localStorage.setItem('router', 'Angular.io');
    this.router.navigate([localStorage.getItem('router')]);
  }
  // scrollToTop(): void {
  //   window.scrollTo(0, 1000);
  // }

  // openDropDown(): void{
  //   // @ts-ignore
  //   document.getElementById('dropDownList').classList.add('class.open');
  // }



}


