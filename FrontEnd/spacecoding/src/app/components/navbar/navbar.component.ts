import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  constructor(private dialog:MatDialog, public loginService:LoginService) { }

  date : Date = new Date();
  
  isLoggedIn = false;
  user:any = null;
 
 

  ngOnInit() {
    this.date = new Date();
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user =this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(
      (data)=>{
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
      }
    ) 

  }
//register
openRegiter(){
  const regRef = this.dialog.open(RegisterComponent);
  regRef.afterClosed().subscribe(result =>{
    regRef.close();
  })
}
//login
openLogin(){
  const logRef = this.dialog.open(LoginComponent);
  logRef.afterClosed().subscribe(result =>{
    logRef.close();
  })
}

}
