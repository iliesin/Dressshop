import { Component, OnInit } from "@angular/core";
import { PropertyFilter } from "../shared/enums/property-filter.enum";
import { EnumHelper } from "../shared/enums/enum-helper";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"]
})

export class SearchResultComponent implements OnInit {

  public propertyFilterOptions: { id: number; name: string }[] = [];
  public propertyFilter = PropertyFilter;

  constructor(private enumHelper: EnumHelper) {}

  ngOnInit() {
    this.propertyFilterOptions = this.enumHelper.enumToArray(
      this.propertyFilter
    );
  }
  
}
