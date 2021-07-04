import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductFromComponent } from './add-product-from.component';

describe('AddProductFromComponent', () => {
  let component: AddProductFromComponent;
  let fixture: ComponentFixture<AddProductFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
