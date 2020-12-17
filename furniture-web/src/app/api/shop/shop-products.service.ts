import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

import { ProductListItem } from 'src/app/core/models/product-list-item';
import { ProductsSearchResponse } from 'src/app/core/models/products-search-response';
import { ShopProductRatingsService } from './shop-product-ratings.service';
import { Db } from './db/db';
import { Paging } from 'src/app/core/models/paging';

@Injectable({ providedIn: 'root' })
export class ShopProductsService {
  constructor(
    private db: Db,
    private ratingService: ShopProductRatingsService
  ) {}

  public getListOfProducts(paging: Paging): Observable<ProductsSearchResponse> {
    return this.getList(paging).pipe(
      switchMap((response) =>
        combineLatest([
          of(response),
          this.ratingService.getRatings(response.products.map((p) => p.id)),
        ])
      ),
      map(([response, ratings]) => {
        return {
          ...response,
          products: response.products.map((product) => {
            const rating = ratings.find((pr) => pr.productId === product.id);
            return {
              ...product,
              stars: rating?.stars,
              hearted: rating?.hearted,
            };
          }),
        };
      })
    );
  }

  removeFromFavorites(id: string): Observable<any> {
    return of({}).pipe(delay(300));
  }
  addToFavorites(id: string): Observable<any> {
    return of({}).pipe(delay(300));
  }

  private getList(paging: Paging): Observable<ProductsSearchResponse> {
    const toListItem = (product: any): ProductListItem => {
      return {
        id: product.id,
        title: product.title,
        status: product.status,
        price: product.price,
        oldPrice: product.oldPrice,
        imageUri: product.imageUri,
      };
    };

    const sliceStart = (paging.page - 1) * paging.pageSize;
    return this.db._products().pipe(
      map((products: ProductListItem[]) => {
        return {
          total: products.length,
          products: products
            .slice(sliceStart, sliceStart + paging.pageSize)
            .map((p) => toListItem(p)),
        };
      })
    );
  }
}
