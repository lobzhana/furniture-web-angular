import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ProductRating {
  productId: string;
  stars: number;
  hearted: boolean;
}

@Injectable({ providedIn: 'root' })
export class ShopProductRatingsService {
  constructor(private httpClient: HttpClient) {}

  public getRatings(productIds: string[]): Observable<ProductRating[]> {
    return this.httpClient
      .get<ProductRating[]>('assets/data/shop/product-ratings.json')
      .pipe(delay(200));
  }
}
