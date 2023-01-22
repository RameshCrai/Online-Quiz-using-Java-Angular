import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AddquestionanswerService {

  constructor(private http:HttpClient) { }

  //question and answer add into server 
  public AddQuestionAnswer(answer:any){
   return this.http.post(`${baseUrl}/answerquestion/`,answer);
  }

  //get all list of the question and answer
  public getLists(){
    return this.http.get(`${baseUrl}/answerquestion/all`);
  }
 

  // delete quiz 
  public deleteQA(qaid:any){
    return  this.http.delete(`${baseUrl}/answerquestion/${qaid}`);
  }

  //get single data 
  public getSingle(qaid:any){
    return this.http.get(`${baseUrl}/answerquestion/${qaid}`)
  }

  //update quiz in sever
  public updateQA(AnswerQuestioness:any){
    return this.http.put(`${baseUrl}/answerquestion/`,AnswerQuestioness);
  }

  //upload file \
  public FileSend(file:any){
    return this.http.post(`${baseUrl}/answerquestion/upload`,file);
  }

}
