import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SLoginpagesComponent } from './s-loginpages.component';

describe('SLoginpagesComponent', () => {
  let component: SLoginpagesComponent;
  let fixture: ComponentFixture<SLoginpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLoginpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLoginpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
