import { Component, OnInit } from "@angular/core";

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
    dots: true
  };

  public showArrivals: any;
  public showedAll: boolean = false;

  public arrivals: any = [
    {
      img: "assets/images/dress-colection/dress1.jpg",
      name: "Straight Leg Jeans",
      price: "55.00"
    },
    {
      img: "assets/images/dress-colection/dress2.jpg",
      name: "Boyfriend T-Shirt with Bohemian Print",
      price: "34.25"
    },
    {
      img: "assets/images/dress-colection/dress3.jpg",
      name: "Only Busted Knee Jean",
      price: "140.50"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    },
    {
      img: "assets/images/dress-colection/dress4.jpg",
      name: "Only Skinny Jeans",
      price: "12.75"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.showArrivals = this.arrivals.slice(0, 4);
  }

  public showAll(): void {
    this.showArrivals = this.arrivals;
    this.showedAll = true;
  }
}
