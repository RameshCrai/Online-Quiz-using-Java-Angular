import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalutionpostfixComponent } from './evalutionpostfix.component';

describe('EvalutionpostfixComponent', () => {
  let component: EvalutionpostfixComponent;
  let fixture: ComponentFixture<EvalutionpostfixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalutionpostfixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalutionpostfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
