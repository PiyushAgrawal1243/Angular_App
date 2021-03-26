import {Directive, ElementRef, HostListener, OnInit, Renderer2 , HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{


  constructor(private el: ElementRef , private renderer: Renderer2) { }

  @HostBinding('style.fontSize') fontsize = '20px';

  ngOnInit(): void {

   // this.el.nativeElement.style.backgroundColor = 'red';
    // @ts-ignore
    this.renderer.setStyle(this.el.nativeElement , 'backgroud-color', 'blue' , false , false );
  }

  @HostListener('mouseenter') onMouseEnter(): void
  {
    // @ts-ignore
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue' , false , false);
    this.fontsize = '20px';
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    // @ts-ignore
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow' , false , false);
    this.fontsize = '30px';

  }
}
