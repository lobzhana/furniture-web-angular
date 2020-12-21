import { Component, Input, OnInit } from '@angular/core';

export interface ProductRatingInfo {
  total: number;
  overall: number;
  stats: { rating: number; overall: number }[];
}

@Component({
  selector: 'app-shop-product-rating-info',
  templateUrl: './shop-product-rating-info.component.html',
  styleUrls: ['./shop-product-rating-info.component.scss'],
})
export class ShopProductRatingInfoComponent implements OnInit {
  @Input() ratingInfo: ProductRatingInfo;

  constructor() {}

  ngOnInit(): void {}
}
