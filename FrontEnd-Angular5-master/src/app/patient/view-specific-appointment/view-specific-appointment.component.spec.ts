import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificAppointmentComponent } from './view-specific-appointment.component';

describe('ViewSpecificAppointmentComponent', () => {
  let component: ViewSpecificAppointmentComponent;
  let fixture: ComponentFixture<ViewSpecificAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
