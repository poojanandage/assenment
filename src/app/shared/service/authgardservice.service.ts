import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate  {

  constructor(private authentication : AuthenticationService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
   this.authentication.isAuthentication().subscribe((authenticated: any) =>{
      if(authenticated){
        return true
      }else{
        this.router.navigate(['/list'])
        return false
      }
    })

    return true
  }
}

