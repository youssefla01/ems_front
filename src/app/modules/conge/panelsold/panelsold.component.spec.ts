import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsoldComponent } from './panelsold.component';

describe('PanelsoldComponent', () => {
  let component: PanelsoldComponent;
  let fixture: ComponentFixture<PanelsoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelsoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
