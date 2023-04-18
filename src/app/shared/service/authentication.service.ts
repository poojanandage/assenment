import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly username = 'myusername';
  private readonly password = 'mypassword';

  isLoggedIn : boolean = false;
  constructor() { }

  isAuthentication(){ 
    let obs$ = new Observable(observer =>{
      setTimeout(() => {
        observer.next(this.isLoggedIn)
      });
    })
    return obs$
  }

    logIn(){
      
      this.isLoggedIn = true
      let storedUsername = sessionStorage.getItem('username');
      let storedPassword = sessionStorage.getItem('password');
      return storedUsername === this.username && storedPassword === this.password;
    }
    
    logOut(){
      this.isLoggedIn = false;
     sessionStorage.removeItem('username');
     sessionStorage.removeItem('password')
    }
  }

 



