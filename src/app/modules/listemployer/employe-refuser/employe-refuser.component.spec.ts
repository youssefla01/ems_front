import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeRefuserComponent } from './employe-refuser.component';

describe('EmployeRefuserComponent', () => {
  let component: EmployeRefuserComponent;
  let fixture: ComponentFixture<EmployeRefuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeRefuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeRefuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
