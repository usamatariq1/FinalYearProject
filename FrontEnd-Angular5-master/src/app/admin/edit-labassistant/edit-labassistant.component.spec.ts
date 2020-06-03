import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabassistantComponent } from './edit-labassistant.component';

describe('EditLabassistantComponent', () => {
  let component: EditLabassistantComponent;
  let fixture: ComponentFixture<EditLabassistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLabassistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
