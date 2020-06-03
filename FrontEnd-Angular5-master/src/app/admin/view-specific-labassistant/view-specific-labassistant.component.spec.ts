import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificLabassistantComponent } from './view-specific-labassistant.component';

describe('ViewSpecificLabassistantComponent', () => {
  let component: ViewSpecificLabassistantComponent;
  let fixture: ComponentFixture<ViewSpecificLabassistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificLabassistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificLabassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
