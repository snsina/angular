import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'lazy',
      loadChildren : 'app/lazy/lazy.module#LazyModule'
    },
    {
      path: 'wheel',
      loadChildren: 'app/wheel/wheel.module#WheelModule'
    },
    {
      path: 'chart',
      loadChildren: 'app/chart/chart.module#ChartModule'
    }
];
