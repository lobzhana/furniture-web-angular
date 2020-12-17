import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBrandsFilterComponent } from './shop-brands-filter.component';

describe('ShopBrandsFilterComponent', () => {
  let component: ShopBrandsFilterComponent;
  let fixture: ComponentFixture<ShopBrandsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBrandsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBrandsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
