import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapvaiiiComponent } from './sapvaiii.component';

describe('SapvaiiiComponent', () => {
  let component: SapvaiiiComponent;
  let fixture: ComponentFixture<SapvaiiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapvaiiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapvaiiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
