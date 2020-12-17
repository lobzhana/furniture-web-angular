import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShopLandingPageComponent } from './containers/shop-landing-page/shop-landing-page.component';
import { ShopProductDetailComponent } from './containers/shop-product-detail/shop-product-detail.component';

const routes: Route[] = [
  {
    path: '',
    component: ShopLandingPageComponent,
  },
  {
    path: 'products/:produtId',
    component: ShopProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ShopRoutingModule {}
