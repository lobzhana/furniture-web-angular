import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductReviewsComponent } from './shop-product-reviews.component';

describe('ShopProductReviewsComponent', () => {
  let component: ShopProductReviewsComponent;
  let fixture: ComponentFixture<ShopProductReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
