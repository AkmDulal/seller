import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPromotionDetailComponent } from './p-promotion-detail.component';

describe('PPromotionDetailComponent', () => {
  let component: PPromotionDetailComponent;
  let fixture: ComponentFixture<PPromotionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPromotionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPromotionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
