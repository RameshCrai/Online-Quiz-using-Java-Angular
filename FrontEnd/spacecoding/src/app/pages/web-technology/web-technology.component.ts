import { Component, OnInit } from '@angular/core';
import { AddquestionanswerService } from 'src/app/services/addquestionanswer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-web-technology',
  templateUrl: './web-technology.component.html',
  styleUrls: ['./web-technology.component.css']
})
export class WebTechnologyComponent implements OnInit {

  constructor(private QAservice:AddquestionanswerService) { }

  ngOnInit(): void {
    
  }

}
