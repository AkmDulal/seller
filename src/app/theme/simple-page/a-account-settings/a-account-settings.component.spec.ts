import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccountSettingsComponent } from './a-account-settings.component';

describe('AAccountSettingsComponent', () => {
  let component: AAccountSettingsComponent;
  let fixture: ComponentFixture<AAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
