import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event-card.component';

describe('EventCardComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent]
    });
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
