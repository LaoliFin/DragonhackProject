import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrodjeComponent } from './ogrodje.component';

describe('OgrodjeComponent', () => {
  let component: OgrodjeComponent;
  let fixture: ComponentFixture<OgrodjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OgrodjeComponent]
    });
    fixture = TestBed.createComponent(OgrodjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
