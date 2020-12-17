import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPriceFilterComponent } from './shop-price-filter.component';

describe('ShopPriceFilterComponent', () => {
  let component: ShopPriceFilterComponent;
  let fixture: ComponentFixture<ShopPriceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPriceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
