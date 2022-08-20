import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneleditComponent } from './paneledit.component';

describe('PaneleditComponent', () => {
  let component: PaneleditComponent;
  let fixture: ComponentFixture<PaneleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaneleditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
