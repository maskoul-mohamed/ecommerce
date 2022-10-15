import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLiftPageComponent } from './shop-lift-page.component';

describe('ShopLiftPageComponent', () => {
  let component: ShopLiftPageComponent;
  let fixture: ComponentFixture<ShopLiftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopLiftPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopLiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
