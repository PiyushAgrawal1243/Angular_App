import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[appscrollDirective]'
})

export class ScrollDirective {

  constructor(private e1: ElementRef) {
  }

 public scrollDown(): void{
    const e2: HTMLElement = this.e1.nativeElement;
    e2.scrollTop = Math.max(0 , e2.scrollHeight - e2.offsetHeight);
 }
}
