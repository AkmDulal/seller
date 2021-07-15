import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-a-profile',
  templateUrl: './a-profile.component.html',
  styleUrls: ['./a-profile.component.scss']
})
export class AProfileComponent implements OnInit {
  selectedTabIndex: number = 0;

  SelectTab(index){
    this.selectedTabIndex = index;
    console.log(index);
  }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
