import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService:LoginService, private router:Router,public dialog:MatDialog){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //check the UserRole
      if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=="ADMIN"){
        return true;
      }
    
      //return into login page if your are not amdmin
      this.router.navigate(['unauth']);
    return false;
  }
  
}
