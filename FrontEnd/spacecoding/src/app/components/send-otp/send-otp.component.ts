import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordForgetComponent } from '../password-forget/password-forget.component';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  //otp save
  SavePassword(){
    let otpPassword = this.dialog.open(PasswordForgetComponent);
    otpPassword.afterClosed().subscribe(result =>{
      console.log(result);
    })
  }

}
