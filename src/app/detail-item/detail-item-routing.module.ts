import { Routes, RouterModule } from "@angular/router";
import { DetailItemComponent } from './detail-item.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: "",
        component: DetailItemComponent,
        data: { title: "Detail item"}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DetailItemRoutingModule {}