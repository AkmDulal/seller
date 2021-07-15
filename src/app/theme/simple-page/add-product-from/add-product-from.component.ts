import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-from',
  templateUrl: './add-product-from.component.html',
  styleUrls: ['./add-product-from.component.scss']
})
export class AddProductFromComponent implements OnInit {
  currentMenuId = "menu1";
  ReadMore:boolean = true
  visible:boolean = false

  ReadMore2:boolean = true
  visible2:boolean = false

  ReadMore3:boolean = true
  visible3:boolean = false

  ReadMore4:boolean = true
  visible4:boolean = false

  navbarfixed:boolean = false

  public basicContent: string;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 200) {
      this.navbarfixed = true
    } else {
      this.navbarfixed = false
    }
  }



  constructor() { }

  ngOnInit(): void {
    this.basicContent = '<p>Hello...</p>';
  }
  onClick(){
    this.ReadMore = !this.ReadMore
    this.visible = !this.ReadMore
  }
  onClick2(){
    this.ReadMore2 = !this.ReadMore2
    this.visible2 = !this.ReadMore2
  }
  onClick3(){
    this.ReadMore3 = !this.ReadMore3
    this.visible3 = !this.ReadMore3
  }
  onClick4(){
    this.ReadMore4 = !this.ReadMore4
    this.visible4 = !this.ReadMore4
  }

}


