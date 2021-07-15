import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-f-transaction-overview',
  templateUrl: './f-transaction-overview.component.html',
  styleUrls: ['./f-transaction-overview.component.scss']
})
export class FTransactionOverviewComponent implements OnInit {

  campaignOne: FormGroup;
  campaignTwo: FormGroup;
    constructor() { 
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      this.campaignOne = new FormGroup({
        start: new FormControl(new Date(year, month, 13)),
        end: new FormControl(new Date(year, month, 16))
      });
  
      this.campaignTwo = new FormGroup({
        start: new FormControl(new Date(year, month, 15)),
        end: new FormControl(new Date(year, month, 19))
      });
  
      
    }

  ngOnInit(): void {
  }

}
