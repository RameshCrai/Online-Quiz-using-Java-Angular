import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberSecurityComponent } from './cyber-security.component';

describe('CyberSecurityComponent', () => {
  let component: CyberSecurityComponent;
  let fixture: ComponentFixture<CyberSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
