import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartSampleComponent } from './chart-sample.component';


const chartRoutes: Routes = [
   {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full'
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'simple',
    component: ChartSampleComponent
  }
];

@NgModule ({
  imports: [RouterModule.forChild(chartRoutes)],
  exports: [RouterModule]
})

export class ChartRoutingModule {}
