import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSellerVoucherComponent } from './p-seller-voucher.component';

describe('PSellerVoucherComponent', () => {
  let component: PSellerVoucherComponent;
  let fixture: ComponentFixture<PSellerVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSellerVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSellerVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
