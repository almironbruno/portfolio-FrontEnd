import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logoURL: string;
  logged:boolean;
  AuthService: AuthenticationService;
  constructor(private AuthSc: AuthenticationService ) {

      this.logoURL="assets/LogoArgProg.png";
      this.logged=true;
      this.AuthService= AuthSc;
   }

  ngOnInit(): void {
  }

}
