import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingOneComponent } from './reporting-one.component';

describe('ReportingOneComponent', () => {
  let component: ReportingOneComponent;
  let fixture: ComponentFixture<ReportingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
