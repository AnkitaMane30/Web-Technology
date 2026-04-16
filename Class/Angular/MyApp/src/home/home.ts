import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   fname : string = "AGM";
   myRoll : Number = 1234;
   course : String = "AIML";

   city : string[] = ["miraj", "sangli", "Kolhapur","pune"];


   ShowButton(){
    this.fname = "Ankita Mane",
    alert("Name updated successfully !!")
  }
}
