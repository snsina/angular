import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import * as d3 from 'd3';

@Directive ({
  selector: '[bar-chart-1]'
})

export class BarchartDirective {
  
  constructor(private el : ElementRef) {
    el.nativeElement.innerHTML = "Salam";
    el.nativeElement.id = "barchart1";
  }
}
