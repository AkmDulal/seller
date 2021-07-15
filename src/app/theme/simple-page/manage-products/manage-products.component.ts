import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageProductsComponent implements OnInit {
  showMe:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag(e: Event){
    this.showMe=!this.showMe
  }


}
