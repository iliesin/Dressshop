import { Component, OnInit } from "@angular/core";
import { DressCollectionService } from '../services/dress-collection.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  slides = [
    { img: "assets/images/home/home-slider/home-slide1.jpg" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];

  slideConfig = {
    dots: true,
    prevArrow: '<button class="slide-prev"></button>',
    nextArrow: '<button class="slide-next"></button>'
  };

  public showArrivals: any;
  public showedAll: boolean = false;

  public arrivals: any = [];

  constructor(private dressCollectionService: DressCollectionService) {

  }

  ngOnInit() {
    this.dressCollectionService.getDressCollection().subscribe(dressCollection => {
      this.arrivals = dressCollection;
      this.showArrivals = this.arrivals.slice(0, 4);
    });    
  }

  public showAll(): void {
    this.showArrivals = this.arrivals;
    this.showedAll = true;
  }
}
