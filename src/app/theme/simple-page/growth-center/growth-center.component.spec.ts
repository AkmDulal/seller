import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthCenterComponent } from './growth-center.component';

describe('GrowthCenterComponent', () => {
  let component: GrowthCenterComponent;
  let fixture: ComponentFixture<GrowthCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
