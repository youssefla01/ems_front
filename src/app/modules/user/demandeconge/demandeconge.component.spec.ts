import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandecongeComponent } from './demandeconge.component';

describe('DemandecongeComponent', () => {
  let component: DemandecongeComponent;
  let fixture: ComponentFixture<DemandecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
