import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerquestionComponent } from './answerquestion.component';

describe('AnswerquestionComponent', () => {
  let component: AnswerquestionComponent;
  let fixture: ComponentFixture<AnswerquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
