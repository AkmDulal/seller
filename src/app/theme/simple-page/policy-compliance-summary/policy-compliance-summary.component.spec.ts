import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComplianceSummaryComponent } from './policy-compliance-summary.component';

describe('PolicyComplianceSummaryComponent', () => {
  let component: PolicyComplianceSummaryComponent;
  let fixture: ComponentFixture<PolicyComplianceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyComplianceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComplianceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
