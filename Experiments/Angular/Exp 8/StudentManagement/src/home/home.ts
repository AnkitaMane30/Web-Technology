import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  student = {
    name: "Ankita",
    age: 21,
    course: "AIML"
  }

  newStudent = {
    name: '',
    age:'',
    course:''
  }

  updateStudent(){
    this.student.name = this.newStudent.name;
    this.student.age = Number(this.newStudent.age);
    this.student.course = this.newStudent.course;
  }

  //image path 
  src = "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"

    //array of courses
  courses : string[] = ["CSE", "AIML", "AIDS", "ENTC"];

}
