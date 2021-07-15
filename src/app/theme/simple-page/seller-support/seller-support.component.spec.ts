import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSupportComponent } from './seller-support.component';

describe('SellerSupportComponent', () => {
  let component: SellerSupportComponent;
  let fixture: ComponentFixture<SellerSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
