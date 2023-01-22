import { TestBed } from '@angular/core/testing';

import { AddquestionanswerService } from './addquestionanswer.service';

describe('AddquestionanswerService', () => {
  let service: AddquestionanswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddquestionanswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
