import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificPatientComponent } from './view-specific-patient.component';

describe('ViewSpecificPatientComponent', () => {
  let component: ViewSpecificPatientComponent;
  let fixture: ComponentFixture<ViewSpecificPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
