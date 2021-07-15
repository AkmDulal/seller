import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-policy-compliance',
  templateUrl: './policy-compliance.component.html',
  styleUrls: ['./policy-compliance.component.scss']
})
export class PolicyComplianceComponent implements OnInit {
  value: number = 10;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
