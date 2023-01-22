import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalutionprefixComponent } from './evalutionprefix.component';

describe('EvalutionprefixComponent', () => {
  let component: EvalutionprefixComponent;
  let fixture: ComponentFixture<EvalutionprefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalutionprefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvalutionprefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
