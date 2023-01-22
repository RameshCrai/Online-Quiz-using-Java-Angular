import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  public user = {
    fullname:'',
    email:'',
    phone:'',
    password:'',
    zipcode:'',
    gender:''
  }

  constructor(private service:UserService,
    private snack:MatSnackBar,public dialog:MatDialog) { }

  ngOnInit(): void {}

  formsSubmit(){
    if(this.user.fullname.trim()=='' || this.user.fullname==null){
      this.snack.open('Fullname is required ?','',{
        duration:3000,
        verticalPosition:'bottom'
      });
      return;
    }
    if(this.user.email.trim()=='' || this.user.email==null){
      this.snack.open('Email is required ?','',{
        duration:3000
      });
      return;
    }
    if(this.user.password.trim()=='' || this.user.password==null){
      this.snack.open('Password is required ?','',{
        duration:3000
      });
      return;
    }
    if(this.user.zipcode.trim()=='' || this.user.zipcode==null){
      this.snack.open('Zipcode is required ?','',{
        duration:3000
      });
      return;
    }
    if(this.user.phone=='' || this.user.phone==null){
      this.snack.open('Phone Number is required ?','',{
        duration:3000
      });
      return;
    }
    if(this.user.gender=='' || this.user.gender==null){
      this.snack.open('Gender is required ','',{
        duration:3000
      });
      return
    }
   

    //server called 

    this.service.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('success','Register successful ','success');
      },(error)=>{
        console.log("server error ",error);
        Swal.fire('error','Server error ','error');
      }      
    );

    

  }
  close(){
   this.close.bind;
  }

  //login dialog
  openLogin(){
    const loginRef = this.dialog.open(LoginComponent);
    loginRef.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }

}
