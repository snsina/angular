import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { RouterModule, Routes } from '@angular/router';



const chartRoutes: Routes = [
  {
    path: '',
    component: ChartComponent
  }
];

@NgModule ({
  imports: [RouterModule.forChild(chartRoutes)],
  exports: [RouterModule]
})

export class ChartRoutingModule {}
