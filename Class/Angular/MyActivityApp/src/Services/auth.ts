import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isLoggedIn = false;
  
  login(username : string, password : string): Boolean{
    if(username === 'admin' && password === "1234"){
      this.isLoggedIn = true;
    }
    return false;
  }

  logout(){
    this.isLoggedIn = false;
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }

}
