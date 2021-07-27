import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavandreviewedComponent } from './favandreviewed.component';

describe('FavandreviewedComponent', () => {
  let component: FavandreviewedComponent;
  let fixture: ComponentFixture<FavandreviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavandreviewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavandreviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
