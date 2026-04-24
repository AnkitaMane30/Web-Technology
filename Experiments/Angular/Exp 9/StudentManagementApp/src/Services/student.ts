import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students : any[] = [];

  getStudent(){
    return this.students;
  }

  addStudent(student : any){
    this.students.push(student)
  }
  updateStudent(index : number, student : any){
      this.students[index] = student;
      
  }
  deleteStudent(index : number){
      this.students.splice(index, 1);
  }


}
