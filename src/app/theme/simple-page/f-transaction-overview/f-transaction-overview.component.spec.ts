import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTransactionOverviewComponent } from './f-transaction-overview.component';

describe('FTransactionOverviewComponent', () => {
  let component: FTransactionOverviewComponent;
  let fixture: ComponentFixture<FTransactionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTransactionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTransactionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
