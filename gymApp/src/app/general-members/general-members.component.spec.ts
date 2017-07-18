import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMembersComponent } from './general-members.component';

describe('GeneralMembersComponent', () => {
  let component: GeneralMembersComponent;
  let fixture: ComponentFixture<GeneralMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
