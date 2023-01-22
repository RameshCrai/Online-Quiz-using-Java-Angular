import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { SendEmailComponent } from 'src/app/components/send-email/send-email.component';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginData={
    email:'',
    password:''
  }

  constructor(private service:LoginService,
     private snack :MatSnackBar, private route:Router,
     public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  //data binding 
 loginForm(){
  if(this.loginData.email.trim()=='' || this.loginData.email==null){
    this.snack.open('Email is Required ?','',{
      duration:2000
    });
    return;
  }
  if(this.loginData.password.trim()=='' || this.loginData.password==null){
    this.snack.open('Password is Required ?','',{
      duration:2000
    });
    return;
  }
  //generate jwt authentication 
  this.service.generateToken(this.loginData).subscribe(
    (data:any)=>{
      //login 
      this.service.LoginUser(data.token);

      this.service.getCurrentUser().subscribe(
        (user:any)=>{
          this.service.setUser(user);
          //redirect .... ADMIN - admin-dashboard
          if(this.service.getUserRole()=="ADMIN"){
            //admin dashboard
            this.route.navigate(['admin']);
            this.service.loginStatusSubject.next(true);
          }else if(this.service.getUserRole()=="NORMAL"){
            //noramal dashboard
            this.route.navigate(['user-dashboard/0']);
            this.service.loginStatusSubject.next(true);
          }else{
            this.service.logout();
          }
        });

    },(error)=>{
      console.log("Login error = ",error);
      //failed 
      Swal.fire('Error', 'Server Error ??', 'error');

    }
  );

 }

//register dialog
openRegister(){
  const registerRef = this.dialog.open(RegisterComponent);
  registerRef.afterClosed().subscribe(
    result =>{
      console.log(result);
    }
  )

}

//forget password
sendEmail(){
  const forgetRef = this.dialog.open(SendEmailComponent);

  forgetRef.afterClosed().subscribe(
    result=>{
      console.log(result);
    }
  )
}

}
