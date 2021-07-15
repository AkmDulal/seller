import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AManageUsersComponent } from './a-manage-users.component';

describe('AManageUsersComponent', () => {
  let component: AManageUsersComponent;
  let fixture: ComponentFixture<AManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AManageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
