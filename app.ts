import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 tabNumber: number = 1;
 userName: string ='';
 mark: number= 0;
 names: string [] = ["anjali","arathy","sivapriya"];    
 marks: number [] = [32,28,13];
 averageMark: number =0;
 constructor(){
  this.calculateAverageMark();
 }
 calculateAverageMark(){
  let total=0;
  this.marks.forEach(mark=> {
  total=total+mark;
  });
  this.averageMark=total/this.marks.length;
 }
 
 showTabTwoContent(){
  this.tabNumber = 2;
 }
 showTabOneContent(){
  this.tabNumber = 1;
 }
 deleteUser(index: number){
  console.log("index",index)
  this.marks.splice(index,1);
  this.names.splice(index,1);
  this.calculateAverageMark();
 }
 clearUserNameAndMark(){
  this.userName= '';
  this.mark= 0;
 }
 storeUserNameAndMarks(){
  console.log("userName",this.userName);
  console.log("mark",this.mark);

  if(this.mark >= 0 && this.mark<=50){
    if(this.userName.length>=3){
      let found= false;
      this.names.forEach(name=>{
        if( name == this.userName){
          found = true;
        }
      });
      if(found){
        alert("Sorry,Duplicate name exist")
      } else {
       this.marks.push(this.mark);
       this.names.push(this.userName);
       this.calculateAverageMark();
       this.clearUserNameAndMark();
      }
       } else {
      alert("user name length above 3 letters")
      }
  } else {
    alert("Sorry,This mark is not in range (0-50)");
  }
  console.log("names arrray",this.names);
  console.log("marks arrray",this.marks);
 }
 
}
