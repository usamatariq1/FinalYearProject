import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificLabAssistantComponent } from './view-specific-lab-assistant.component';

describe('ViewSpecificLabAssistantComponent', () => {
  let component: ViewSpecificLabAssistantComponent;
  let fixture: ComponentFixture<ViewSpecificLabAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificLabAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificLabAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
