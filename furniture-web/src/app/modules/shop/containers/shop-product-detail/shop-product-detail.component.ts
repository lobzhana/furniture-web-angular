import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductReviewListItem } from '../../components/shop-product-reviews/shop-product-reviews.component';

@Component({
  selector: 'app-shop-product-detail',
  templateUrl: './shop-product-detail.component.html',
  styleUrls: ['./shop-product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopProductDetailComponent implements OnInit {
  reviews$: Observable<ProductReviewListItem[]>;

  constructor() {}

  ngOnInit(): void {
    this.reviews$ = of([
      {
        avatar: 'https://via.placeholder.com/65x62',
        name: 'Reyna Chung',
        rating: 4.5,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis commodi ipsa aut reiciendis deleniti, voluptates vero nihil reprehenderit expedita tenetur veniam voluptate at quas.',
        whenUtc: new Date(2020, 10, 5),
      },
      {
        avatar: 'https://via.placeholder.com/65x62',
        name: 'Johnny Simpson',
        rating: 4.8,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis commodi ipsa aut reiciendis deleniti, voluptates vero nihil reprehenderit expedita tenetur veniam voluptate at quas.',
        whenUtc: new Date(2020, 10, 5),
      },
      {
        avatar: 'https://via.placeholder.com/65x62',
        name: 'Gracelyn Mason',
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis commodi ipsa aut reiciendis deleniti, voluptates vero nihil reprehenderit expedita tenetur veniam voluptate at quas.',
        whenUtc: new Date(2020, 10, 5),
      },
      {
        avatar: 'https://via.placeholder.com/65x62',
        name: 'Veeti Seppanen',
        rating: 4.5,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis commodi ipsa aut reiciendis deleniti, voluptates vero nihil reprehenderit expedita tenetur veniam voluptate at quas.',
        whenUtc: new Date(2020, 10, 5),
      },
      {
        avatar: 'https://via.placeholder.com/65x62',
        name: 'Camden Bacon',
        rating: 4.0,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis commodi ipsa aut reiciendis deleniti, voluptates vero nihil reprehenderit expedita tenetur veniam voluptate at quas.',
        whenUtc: new Date(2020, 10, 5),
      },
    ]);
  }
}
