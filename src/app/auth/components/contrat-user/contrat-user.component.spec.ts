import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratUserComponent } from './contrat-user.component';

describe('ContratUserComponent', () => {
  let component: ContratUserComponent;
  let fixture: ComponentFixture<ContratUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
