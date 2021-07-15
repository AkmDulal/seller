import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComplianceComponent } from './policy-compliance.component';

describe('PolicyComplianceComponent', () => {
  let component: PolicyComplianceComponent;
  let fixture: ComponentFixture<PolicyComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
