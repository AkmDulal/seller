import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAccountStatementComponent } from './f-account-statement.component';

describe('FAccountStatementComponent', () => {
  let component: FAccountStatementComponent;
  let fixture: ComponentFixture<FAccountStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAccountStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAccountStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
