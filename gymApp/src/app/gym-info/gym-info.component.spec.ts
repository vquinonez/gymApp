import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymInfoComponent } from './gym-info.component';

describe('GymInfoComponent', () => {
  let component: GymInfoComponent;
  let fixture: ComponentFixture<GymInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
