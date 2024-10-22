import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOrderComponent } from './timeline-order.component';

describe('TimelineOrderComponent', () => {
  let component: TimelineOrderComponent;
  let fixture: ComponentFixture<TimelineOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
