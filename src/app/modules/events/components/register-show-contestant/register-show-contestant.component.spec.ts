import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterShowContestantComponent } from './register-show-contestant.component';

describe('RegisterShowContestantComponent', () => {
  let component: RegisterShowContestantComponent;
  let fixture: ComponentFixture<RegisterShowContestantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterShowContestantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterShowContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
