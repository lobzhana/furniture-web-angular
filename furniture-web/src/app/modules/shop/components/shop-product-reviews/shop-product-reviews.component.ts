import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

export interface ProductReviewListItem {
  avatar?: string;
  name: string;
  rating: number;
  comment: string;
  whenUtc: Date;
}

@Component({
  selector: 'app-shop-product-reviews',
  templateUrl: './shop-product-reviews.component.html',
  styleUrls: ['./shop-product-reviews.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopProductReviewsComponent implements OnInit {
  @Input() reviews: ProductReviewListItem[];

  constructor() {}

  ngOnInit(): void {}
}
