import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentURL = '';
  islogin = false;
  constructor() { 
    this.currentURL = window.location.href; 
  }


  loggedIns(): boolean {
    
    // return this.islogin

    if(this.currentURL === 'http://localhost:4500/login'  || this.currentURL === 'http://localhost:4500/')
    { 
       return true;
    }else if(this.currentURL != ''){
      return true;
    }else{
      return this.islogin;
    }
    }


}
