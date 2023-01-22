import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  quiztitle:any
  quizid:any
  quizdata:any

  question={
    quiz:{qid:''},
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:''
    }

   
  

  constructor(private _service:QuestionService,
    private _snack:MatSnackBar,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.quizid = params['quizid'];
    });
    this._route.params.subscribe(params=>{
      this.quiztitle = params['quiztitle'];
    });

    //quiz id set    
    this.question.quiz['qid'] = this.quizid;
    

  }

  addQuestion(){

    if(this.question.content.trim()==''||this.question.content==null){
      this._snack.open('Required Content for question ?','ok',{
        duration:3000
      });
      return
    }
    if(this.question.option1.trim()==''||this.question.option1==null){
      this._snack.open('Required Option 1 for question ?','ok',{
        duration:3000
      });
      return
    }
    if(this.question.option2.trim()==''||this.question.option2==null){
      this._snack.open('Required Option 2 for question ?','ok',{
        duration:3000
      });
      return
    }

    //server call 
    this._service.addQuestionsintoServer(this.question).subscribe(
    (data:any)=>{
      //success
      Swal.fire('success','Quiz add successful . add Another one','success');
      this.question.content='',
      this.question.option1='',
      this.question.option2='',
      this.question.option3='',
      this.question.option4='',
      this.question.answer=''
    },(error:any)=>{
      Swal.fire('error','Quiz add falied into server ?','error');
    }
    )

  }

}
