import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailItemComponent } from './detail-item.component';
import { DetailItemRoutingModule } from './detail-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailItemRoutingModule
  ],
  exports: [
    DetailItemComponent
  ],
  declarations: [DetailItemComponent]
})
export class DetailItemModule { }
