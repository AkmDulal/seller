import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FOrderOverviewComponent } from './f-order-overview.component';

describe('FOrderOverviewComponent', () => {
  let component: FOrderOverviewComponent;
  let fixture: ComponentFixture<FOrderOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FOrderOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FOrderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
