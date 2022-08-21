import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdemandeComponent } from './newdemande.component';

describe('NewdemandeComponent', () => {
  let component: NewdemandeComponent;
  let fixture: ComponentFixture<NewdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
