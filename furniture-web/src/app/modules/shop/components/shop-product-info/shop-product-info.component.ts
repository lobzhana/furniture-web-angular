import { Component, Input, OnInit } from '@angular/core';
import { ProductInfo } from 'src/app/core/models/product-info';

@Component({
  selector: 'app-shop-product-info',
  templateUrl: './shop-product-info.component.html',
  styleUrls: ['./shop-product-info.component.scss'],
})
export class ShopProductInfoComponent implements OnInit {
  @Input() productInfo: ProductInfo;

  constructor() {}

  ngOnInit(): void {}
}
