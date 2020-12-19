import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductImagesComponent } from './shop-product-images.component';

describe('ShopProductImagesComponent', () => {
  let component: ShopProductImagesComponent;
  let fixture: ComponentFixture<ShopProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
