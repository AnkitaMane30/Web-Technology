import { Component } from '@angular/core';
import { Student } from '../Services/student';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-student',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  student = {
    name:'',
    age:'',
    course:''
  }

  constructor(private studentService : Student, private router: Router){}

  addStudent(){
    this.studentService.addStudent(this.student);
    alert("Student Added SuccessFully");

    this.student = {name:'', age:'',course:''}
    this.router.navigate(['/List']);
  }
}
