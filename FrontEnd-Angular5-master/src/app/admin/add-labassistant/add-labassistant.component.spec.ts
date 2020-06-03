import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabassistantComponent } from './add-labassistant.component';

describe('AddLabassistantComponent', () => {
  let component: AddLabassistantComponent;
  let fixture: ComponentFixture<AddLabassistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabassistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
