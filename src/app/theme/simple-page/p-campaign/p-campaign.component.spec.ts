import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCampaignComponent } from './p-campaign.component';

describe('PCampaignComponent', () => {
  let component: PCampaignComponent;
  let fixture: ComponentFixture<PCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
