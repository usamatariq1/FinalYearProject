import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLogComponent } from './patient-log.component';

describe('PatientLogComponent', () => {
  let component: PatientLogComponent;
  let fixture: ComponentFixture<PatientLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
