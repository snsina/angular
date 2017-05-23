import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive ({
  selector: '[gold]'
})




export class GoldDirective {

  @Input() bcolor: string;
  constructor(private el: ElementRef) {
    this.gold(this.bcolor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.gold('skyblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.gold('gold');
  }

  private gold(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
