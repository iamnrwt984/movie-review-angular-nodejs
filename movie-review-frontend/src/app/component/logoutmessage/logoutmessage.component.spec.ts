import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutmessageComponent } from './logoutmessage.component';

describe('LogoutmessageComponent', () => {
  let component: LogoutmessageComponent;
  let fixture: ComponentFixture<LogoutmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
