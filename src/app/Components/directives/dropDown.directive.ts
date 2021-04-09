import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appdropDownDirective]'
})

export  class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(): void{
    this.isOpen = !this.isOpen;
  }
}
