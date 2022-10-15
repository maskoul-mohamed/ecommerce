import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideFiltterComponent } from './left-side-filtter.component';


describe('LeftSideFiltterComponent', () => {
  let component: LeftSideFiltterComponent;
  let fixture: ComponentFixture<LeftSideFiltterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideFiltterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideFiltterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
