import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
