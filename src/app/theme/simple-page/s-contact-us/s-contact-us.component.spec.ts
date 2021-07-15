import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SContactUsComponent } from './s-contact-us.component';

describe('SContactUsComponent', () => {
  let component: SContactUsComponent;
  let fixture: ComponentFixture<SContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
