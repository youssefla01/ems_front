import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAccepterComponent } from './employe-accepter.component';

describe('EmployeAccepterComponent', () => {
  let component: EmployeAccepterComponent;
  let fixture: ComponentFixture<EmployeAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeAccepterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
