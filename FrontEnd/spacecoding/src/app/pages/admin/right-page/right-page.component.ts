import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.css']
})
export class RightPageComponent implements OnInit {

  user:any = null;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.user = this.service.getUser();
    this.service.loginStatusSubject.asObservable().subscribe(
      (data)=>{
        this.user = this.service.getUser();
      }
    )

  }

    //logout
    public logout(){
      this.service.logout();
      window.location.reload();
    }

}
