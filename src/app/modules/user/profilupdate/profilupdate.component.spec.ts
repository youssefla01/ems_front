import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilupdateComponent } from './profilupdate.component';

describe('ProfilupdateComponent', () => {
  let component: ProfilupdateComponent;
  let fixture: ComponentFixture<ProfilupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
