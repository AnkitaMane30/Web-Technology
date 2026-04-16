import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student = [
    {name: "Ankita",age :21, course : "AIML"},
    {name: "siddhi",age :21, course : "AIML"},
  ]

  getStudent(){
    return this.student;
  }
}
