import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logoURL: string;
  logged:boolean;

  constructor() {

      this.logoURL="assets/LogoArgProg.png";
      this.logged=true;
   }

  ngOnInit(): void {
  }

}
