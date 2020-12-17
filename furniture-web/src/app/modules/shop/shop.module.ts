import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopLandingPageComponent } from './containers/shop-landing-page/shop-landing-page.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopProductsComponent } from './containers/shop-products/shop-products.component';
import { ShopSideBarComponent } from './components/shop-side-bar/shop-side-bar.component';
import { ShopOfferComponent } from './components/shop-offer/shop-offer.component';
import { ShopCategoriesFilterComponent } from './components/shop-categories-filter/shop-categories-filter.component';
import { ShopBrandsFilterComponent } from './components/shop-brands-filter/shop-brands-filter.component';
import { ShopPriceFilterComponent } from './components/shop-price-filter/shop-price-filter.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductStatusBadgeComponent } from './components/product-status-badge/product-status-badge.component';
import { ShopProductDetailComponent } from './containers/shop-product-detail/shop-product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShopLandingPageComponent,
    ShopProductsComponent,
    ShopSideBarComponent,
    ShopOfferComponent,
    ShopCategoriesFilterComponent,
    ShopBrandsFilterComponent,
    ShopPriceFilterComponent,
    ProductListItemComponent,
    ProductStatusBadgeComponent,
    ShopProductDetailComponent,
  ],
  imports: [CommonModule, RouterModule, ShopRoutingModule, UiModule],
})
export class ShopModule {}
