import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../Services/student-service';

@Component({
  selector: 'app-list-students',
  imports: [FormsModule, CommonModule],
templateUrl: './list-students.html',
  styleUrl: './list-students.css',
})
export class ListStudents {
  student : any[] = [];
  // any means it can store any type of array

  constructor(private studentService: StudentService){}

  //ng Hook - ng oninit():- this method runs automatically when com
  ngOnInit(){
    this.student = this.studentService.getStudent();
    console.log(this.student);
  }
}
