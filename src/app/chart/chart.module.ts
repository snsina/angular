import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart-routing.module';
import { GoldDirective } from './gold.directive';
import { BarchartDirective } from './barchart.directive';
import { ChartSampleComponent } from './chart-sample.component';


@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule
  ],
  declarations: [
    ChartComponent,
    GoldDirective,
    BarchartDirective,
    ChartSampleComponent
  ]
})
export class ChartModule { }
