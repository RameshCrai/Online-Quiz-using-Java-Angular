import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfixtoprefixComponent } from './infixtoprefix.component';

describe('InfixtoprefixComponent', () => {
  let component: InfixtoprefixComponent;
  let fixture: ComponentFixture<InfixtoprefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfixtoprefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfixtoprefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
