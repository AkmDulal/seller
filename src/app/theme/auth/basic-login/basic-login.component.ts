import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.islogin = true;
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');

    // if (this.auth.loggedIns()) { 
    //   this.router.navigate(['/dashboard']); 
    //  }else{
    //   this.router.navigate(['/login']); 
    //  }

  }

  loginuser() {
      this.auth.islogin = true
      this.router.navigate(['/dashboard']);
  }
  becomeSeller() {
    this.auth.islogin = true
    this.router.navigate(['/become-seller']);
  }

}
