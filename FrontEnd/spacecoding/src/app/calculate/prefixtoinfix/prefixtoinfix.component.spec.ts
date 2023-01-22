import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixtoinfixComponent } from './prefixtoinfix.component';

describe('PrefixtoinfixComponent', () => {
  let component: PrefixtoinfixComponent;
  let fixture: ComponentFixture<PrefixtoinfixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixtoinfixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefixtoinfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
