import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategoriesFilterComponent } from './shop-categories-filter.component';

describe('ShopCategoriesFilterComponent', () => {
  let component: ShopCategoriesFilterComponent;
  let fixture: ComponentFixture<ShopCategoriesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCategoriesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
