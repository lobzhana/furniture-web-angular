import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-reviews',
  templateUrl: './shop-product-reviews.component.html',
  styleUrls: ['./shop-product-reviews.component.scss'],
})
export class ShopProductReviewsComponent implements OnInit {
  @Input() reviews: any[];
  constructor() {}

  ngOnInit(): void {}
}
