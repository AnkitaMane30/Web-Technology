import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
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
}
