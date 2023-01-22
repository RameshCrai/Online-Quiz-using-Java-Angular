import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { FounderComponent } from '../founder/founder.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date : Date = new Date();
  isLoggedIn = false;
  constructor(public dialog:MatDialog,
    private _login:LoginService) { }

  ngOnInit(): void {
   this.isLoggedIn = this._login.isLoggedIn();
   this._login.loginStatusSubject.asObservable().subscribe(
    (data:any)=>{
      this.isLoggedIn = data;
    }
   )
 
  }

  openFound(){
    const founderRef = this.dialog.open(FounderComponent);
    founderRef.afterClosed();
  }

}
