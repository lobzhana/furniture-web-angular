import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShopLandingPageComponent } from './containers/shop-landing-page/shop-landing-page.component';

const routes: Route[] = [
  {
    path: '',
    component: ShopLandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ShopRoutingModule {}
