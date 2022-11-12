import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextcreatuserComponent } from './nextcreatuser.component';

describe('NextcreatuserComponent', () => {
  let component: NextcreatuserComponent;
  let fixture: ComponentFixture<NextcreatuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextcreatuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextcreatuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
