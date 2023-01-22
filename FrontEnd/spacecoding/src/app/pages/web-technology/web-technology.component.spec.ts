import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTechnologyComponent } from './web-technology.component';

describe('WebTechnologyComponent', () => {
  let component: WebTechnologyComponent;
  let fixture: ComponentFixture<WebTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
