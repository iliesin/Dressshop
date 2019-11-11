import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.module#HomeModule"
  },
  {
    path: "detail-item",
    loadChildren: "./detail-item/detail-item.module#DetailItemModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
