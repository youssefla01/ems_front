import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderefuserComponent } from './demanderefuser.component';

describe('DemanderefuserComponent', () => {
  let component: DemanderefuserComponent;
  let fixture: ComponentFixture<DemanderefuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderefuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanderefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
