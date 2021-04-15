import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private e1: ElementRef) { }

 // @Input() appHighLight: string;

  @HostListener('mouseenter') onMouseEnter(): void{
    this.highlight('yellow');

  }

  @HostListener('mouseleave') onMouseLeave(): void{
    // @ts-ignore
    this.highlight( null);
  }

   highlight(color: string): void {
    this.e1.nativeElement.style.backgroundColor = color;
  }


}
