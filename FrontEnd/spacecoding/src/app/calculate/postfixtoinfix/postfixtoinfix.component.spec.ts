import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfixtoinfixComponent } from './postfixtoinfix.component';

describe('PostfixtoinfixComponent', () => {
  let component: PostfixtoinfixComponent;
  let fixture: ComponentFixture<PostfixtoinfixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfixtoinfixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostfixtoinfixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
