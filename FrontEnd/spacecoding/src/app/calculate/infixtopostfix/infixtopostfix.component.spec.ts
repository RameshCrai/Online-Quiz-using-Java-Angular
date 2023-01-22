import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfixtopostfixComponent } from './infixtopostfix.component';

describe('InfixtopostfixComponent', () => {
  let component: InfixtopostfixComponent;
  let fixture: ComponentFixture<InfixtopostfixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfixtopostfixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfixtopostfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
