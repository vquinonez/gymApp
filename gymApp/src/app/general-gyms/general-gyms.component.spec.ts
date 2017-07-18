import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGymsComponent } from './general-gyms.component';

describe('GeneralGymsComponent', () => {
  let component: GeneralGymsComponent;
  let fixture: ComponentFixture<GeneralGymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralGymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
