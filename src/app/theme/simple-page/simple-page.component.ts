import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss']
})
export class SimplePageComponent implements OnInit {

  private _router: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {


    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
   //   elemMainPanel.scrollTop = 0;
    //  elemSidebar.scrollTop = 0;
    });

  }

}
