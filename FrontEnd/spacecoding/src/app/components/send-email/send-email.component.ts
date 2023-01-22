import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendOtpComponent } from '../send-otp/send-otp.component';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  user={
    email:''
  }

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openOTP(){
    
    const sentOTP = this.dialog.open(SendOtpComponent);

    sentOTP.beforeClosed().subscribe(
     
    )
  }

}
