import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logoURL: string;
  githubURL:string;
  linkedInURL:string;
  logged:boolean;
  AuthService: AuthenticationService;

  constructor(private AuthSc: AuthenticationService ) {

      this.logoURL="assets/LogoArgProg.png";
      this.githubURL="https://github.com/almironbruno";
      this.linkedInURL="https://www.linkedin.com/in/almironbruno";
      this.logged=false;
      this.AuthService= AuthSc;
   }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void {

    this.logged = this.AuthService.isUserAuthenticated();
  }
}
