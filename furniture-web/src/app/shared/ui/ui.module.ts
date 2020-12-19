import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { PagingComponent } from './paging/paging.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { HeartComponent } from './heart/heart.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';

const exportable = [
  RangeSliderComponent,
  DropDownComponent,
  PagingComponent,
  RatingStarComponent,
  HeartComponent,
  QuantityInputComponent,
];

@NgModule({
  declarations: [...exportable],
  imports: [CommonModule],
  exports: [...exportable],
})
export class UiModule {}
