import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificTestComponent } from './view-specific-test.component';

describe('ViewSpecificTestComponent', () => {
  let component: ViewSpecificTestComponent;
  let fixture: ComponentFixture<ViewSpecificTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpecificTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
