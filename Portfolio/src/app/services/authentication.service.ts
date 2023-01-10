import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //If user is authenticated
  isAuthenticated:boolean;

  constructor() {

    this.isAuthenticated=false;

   }


  isUserAuthenticated():boolean {

    return this.isAuthenticated;

  }
}
