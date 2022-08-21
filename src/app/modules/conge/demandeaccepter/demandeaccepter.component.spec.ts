import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeaccepterComponent } from './demandeaccepter.component';

describe('DemandeaccepterComponent', () => {
  let component: DemandeaccepterComponent;
  let fixture: ComponentFixture<DemandeaccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeaccepterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeaccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
