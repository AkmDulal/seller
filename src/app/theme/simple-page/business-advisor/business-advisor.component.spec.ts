import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvisorComponent } from './business-advisor.component';

describe('BusinessAdvisorComponent', () => {
  let component: BusinessAdvisorComponent;
  let fixture: ComponentFixture<BusinessAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
