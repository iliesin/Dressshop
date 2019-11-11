import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchResultComponent } from "./search-result.component";
import { SearchResultRoutingModule } from "./search-result-routing.module";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [SearchResultComponent],
  declarations: [SearchResultComponent]
})
export class SearchResultModule {}
