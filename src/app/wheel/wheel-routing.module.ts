import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WheelComponent } from './wheel.component';
import { WheelBlackComponent } from './wheel.black.component';

const wheelRoutes: Routes = [
  {
    path: '',
    redirectTo: 'wheel',
    pathMatch: 'full'
  },
  {
    path: 'wheel',
    component: WheelComponent
  },
  {
    path: 'black',
    component: WheelBlackComponent
  }
];

@NgModule ({
  imports: [RouterModule.forChild(wheelRoutes)],
  exports: [RouterModule]
  })

export class WheelRoutingModule {};
