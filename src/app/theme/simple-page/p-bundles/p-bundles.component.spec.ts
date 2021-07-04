import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PBundlesComponent } from './p-bundles.component';

describe('PBundlesComponent', () => {
  let component: PBundlesComponent;
  let fixture: ComponentFixture<PBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
