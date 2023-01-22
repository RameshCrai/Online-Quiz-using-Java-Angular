import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaChapterComponent } from './dsa-chapter.component';

describe('DsaChapterComponent', () => {
  let component: DsaChapterComponent;
  let fixture: ComponentFixture<DsaChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsaChapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsaChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
