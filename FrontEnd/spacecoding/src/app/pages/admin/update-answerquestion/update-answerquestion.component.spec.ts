import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnswerquestionComponent } from './update-answerquestion.component';

describe('UpdateAnswerquestionComponent', () => {
  let component: UpdateAnswerquestionComponent;
  let fixture: ComponentFixture<UpdateAnswerquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnswerquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnswerquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
