import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPageComponent } from './left-page.component';

describe('LeftPageComponent', () => {
  let component: LeftPageComponent;
  let fixture: ComponentFixture<LeftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
