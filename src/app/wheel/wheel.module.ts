import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel.component';
import { WheelBlackComponent } from './wheel.black.component'
import { WheelRoutingModule } from './wheel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WheelRoutingModule
  ],
  declarations: [WheelComponent, WheelBlackComponent]
})
export class WheelModule { }
