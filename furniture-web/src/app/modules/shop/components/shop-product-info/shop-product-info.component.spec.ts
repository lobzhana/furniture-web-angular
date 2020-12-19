import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductInfoComponent } from './shop-product-info.component';

describe('ShopProductInfoComponent', () => {
  let component: ShopProductInfoComponent;
  let fixture: ComponentFixture<ShopProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
