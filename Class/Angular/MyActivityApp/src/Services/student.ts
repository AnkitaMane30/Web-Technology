import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {

  students = [
    {id: 1, name:"Ankita"},
    {id: 2, name:"Vaishnavi"}
  ]

  getStudent(){
    return this.students;
  }

}
