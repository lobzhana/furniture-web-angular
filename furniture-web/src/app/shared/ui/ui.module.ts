import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { PagingComponent } from './paging/paging.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { HeartComponent } from './heart/heart.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';
import { UiTabComponent } from './ui-tabs/ui-tab/ui-tab.component';
import { UiTabComponentService } from './ui-tabs/tab-state.service';

const exportable = [
  RangeSliderComponent,
  DropDownComponent,
  PagingComponent,
  RatingStarComponent,
  HeartComponent,
  QuantityInputComponent,
  UiTabsComponent,
  UiTabComponent,
];

@NgModule({
  declarations: [...exportable],
  imports: [CommonModule],
  exports: [...exportable],
  providers: [UiTabComponentService],
})
export class UiModule {}
