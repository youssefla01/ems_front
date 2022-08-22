import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelajoutComponent } from './panelajout.component';

describe('PanelajoutComponent', () => {
  let component: PanelajoutComponent;
  let fixture: ComponentFixture<PanelajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelajoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
