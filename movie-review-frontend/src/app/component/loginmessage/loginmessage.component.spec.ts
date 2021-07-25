import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmessageComponent } from './loginmessage.component';

describe('LoginmessageComponent', () => {
  let component: LoginmessageComponent;
  let fixture: ComponentFixture<LoginmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
