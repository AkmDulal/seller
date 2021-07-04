import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReviewsComponent } from './orders-reviews.component';

describe('OrdersReviewsComponent', () => {
  let component: OrdersReviewsComponent;
  let fixture: ComponentFixture<OrdersReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
