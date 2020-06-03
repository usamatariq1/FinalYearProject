import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabAssistantsComponent } from './view-lab-assistants.component';

describe('ViewLabAssistantsComponent', () => {
  let component: ViewLabAssistantsComponent;
  let fixture: ComponentFixture<ViewLabAssistantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLabAssistantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
