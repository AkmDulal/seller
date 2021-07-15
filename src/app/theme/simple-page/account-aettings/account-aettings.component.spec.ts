import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAettingsComponent } from './account-aettings.component';

describe('AccountAettingsComponent', () => {
  let component: AccountAettingsComponent;
  let fixture: ComponentFixture<AccountAettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountAettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
