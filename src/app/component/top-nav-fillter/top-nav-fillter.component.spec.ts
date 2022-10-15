import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavFillterComponent } from './top-nav-fillter.component';

describe('TopNavFillterComponent', () => {
  let component: TopNavFillterComponent;
  let fixture: ComponentFixture<TopNavFillterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavFillterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
