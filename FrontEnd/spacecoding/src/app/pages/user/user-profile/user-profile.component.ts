import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any=null;

  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.user = this.service.getUser();

  }

}
