import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart-routing.module';
import { GoldDirective } from './gold.directive';
import { BarchartDirective } from './barchart.directive';


@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule
  ],
  declarations: [
    ChartComponent,
    GoldDirective,
    BarchartDirective
  ]
})
export class ChartModule { }
