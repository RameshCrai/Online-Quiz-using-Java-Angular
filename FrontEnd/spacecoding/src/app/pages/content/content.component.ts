
import { Component, OnInit } from '@angular/core';
import { AddquestionanswerService } from 'src/app/services/addquestionanswer.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})



export class ContentComponent implements OnInit {
  public qatitle:any
  public content:any
  newcontent:any


  

  isLoggedIn = false;

  constructor(public service:LoginService, private AQService:AddquestionanswerService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.service.isLoggedIn();
    this.service.loginStatusSubject.asObservable().subscribe(
      (data)=>{
        this.isLoggedIn = this.service.isLoggedIn();
      }
    );
  }

  // expanser
  panelOpenState = false;



}
