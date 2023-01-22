import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofquestionanswerComponent } from './listofquestionanswer.component';

describe('ListofquestionanswerComponent', () => {
  let component: ListofquestionanswerComponent;
  let fixture: ComponentFixture<ListofquestionanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofquestionanswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofquestionanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
