import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourformComponent } from './tourform.component';

describe('TourformComponent', () => {
  let component: TourformComponent;
  let fixture: ComponentFixture<TourformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
