import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TitleStrategy } from '@angular/router';
import { AddquestionanswerService } from 'src/app/services/addquestionanswer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-answerquestion',
  templateUrl: './answerquestion.component.html',
  styleUrls: ['./answerquestion.component.css']
})
export class AnswerquestionComponent implements OnInit {

  public answer={
    qatitle:'',
    content:'',
    category:'',
    writername:'',
    publishdate:'',
    ansquefile:''
  }

  constructor(private snack:MatSnackBar,private queansService:AddquestionanswerService) { }

  ngOnInit(): void {
  }

  answerForm(){
    if(this.answer.qatitle.trim()=='' || this.answer.qatitle==null){
     this.snack.open('Question should be fill ','',{
       duration:2000,
       verticalPosition :'top'
     });
     return
    }
    if(this.answer.content.trim()=='' || this.answer.content==null){
     this.snack.open('Content should be fill ','',{
       duration:2000,
       verticalPosition :'top'
     });
     return
    }
    if(this.answer.category.trim()=='' || this.answer.category==null){
     this.snack.open('Category should be fill ','',{
       duration:2000,
       verticalPosition:'top'
     });
     return
    }
    if(this.answer.writername.trim()=='' || this.answer.writername==null){
     this.snack.open('Writername should be fill ','',{
       duration:2000,
       verticalPosition:'top'
     });
     return
    }
    if(this.answer.publishdate.trim()=='' || this.answer.publishdate==null){
     this.snack.open('Publish Date should be fill ','',{
       duration:2000,
       verticalPosition:'top'
     });
     return
    }



    //add server question and answer 
    this.queansService.AddQuestionAnswer(this.answer).subscribe(
      (data:any)=>{
        //success
        Swal.fire("success", "Contents is save in server ","success");

      },(error:any)=>{
        //error 
        Swal.fire("error","Server Error to save data","error");

      }
    );
  }

  file:any
  uploadFile(event:any){
    this.file = event.target.files[0];

    this.queansService.FileSend(this.file).subscribe(
      (data:any)=>{
        //success to add file in server 
        Swal.fire('success ','file sending is successful','success');

      },(error:any)=>{
        //file sending is error 
        Swal.fire('error ','file sending is ERROR','error');
      }
    );

  }

}
