import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopProductsService } from 'src/app/api/shop/shop-products.service';
import { Paging } from 'src/app/core/models/paging';
import { ProductListItem } from 'src/app/core/models/product-list-item';
import { ProductsSearchResponse } from 'src/app/core/models/products-search-response';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopProductsComponent implements OnInit {
  response$: Observable<ProductsSearchResponse>;
  paging: Paging = { page: 1, pageSize: 9 };

  constructor(private productsService: ShopProductsService) {}

  ngOnInit(): void {
    this.fill();
  }

  fill(): void {
    this.response$ = this.productsService.getListOfProducts(this.paging);
  }

  sortingChanged(item: any): void {
    console.log('sorting changed to');
    console.log(item);
  }

  pageChanged(page: number): void {
    this.paging.page = page;
    this.fill();
  }

  addToFavorites(product: ProductListItem): void {
    this.productsService.addToFavorites(product.id).subscribe(() => {
      console.log(`addedToFavorites: ${product.id}`);
    });
  }

  removeFromFavorites(product: ProductListItem): void {
    this.productsService.removeFromFavorites(product.id).subscribe(() => {
      console.log(`removedFromFavorites: ${product.id}`);
    });
  }
}
