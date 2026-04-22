import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../Services/student';
import { Auth } from '../Services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isVisible: boolean = false;

  showDiv(){
    this.isVisible = true;
  }

  hideDiv(){
    this.isVisible = false;
  }

  isPink: boolean = true;

  toggleColor() {
    this.isPink= !this.isPink;
  }

  num1 : number = 0;
  num2 : number = 0;

  selectedCourse: string = ""; 
  courses: string[] = ["CSE", "AIML", "AIDS", "ENTC"];

  //Services Example 1
  students : any[] = [];

  constructor(private studentServices : Student,private authServices: Auth){}

  ngOnInit(){
    this.students = this.studentServices.getStudent();
  }

  //Services Example 2
  username = '';
  password = '';
  message = '';

  onLogin(){
    const success = this.authServices.login(this.username, this.password);

    if(success){
      this.message = "Login Successful";
    }else{
      this.message = "Invalid Credentials"
    }

    this.username = '';
    this.password = '';
  }
  

}
