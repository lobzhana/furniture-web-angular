import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductRatingInfoComponent } from './shop-product-rating-info.component';

describe('ShopProductRatingInfoComponent', () => {
  let component: ShopProductRatingInfoComponent;
  let fixture: ComponentFixture<ShopProductRatingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductRatingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductRatingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
