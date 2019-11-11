import { Routes, RouterModule } from "@angular/router";
import { SearchResultComponent } from './search-result.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: "",
        component: SearchResultComponent,
        data: { title: "Search result" }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SearchResultRoutingModule {}