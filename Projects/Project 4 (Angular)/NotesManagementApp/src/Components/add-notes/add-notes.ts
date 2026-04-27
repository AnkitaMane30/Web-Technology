import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note';
import { NotesServices } from '../../Services/notes-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-notes.html',
  styleUrl: './add-notes.css',
})
export class AddNotes {
  note : Note = {
    id: 0,
    title :'',
    description :'',
    category :'',
    date :'', 
    important: false
  }

  constructor(private notesServices : NotesServices){ }

  addNotes(){
    this.note.id = Date.now();
    this.note.date = new Date().toLocaleDateString();
    
    this.notesServices.addNotes(this.note);

    alert("Notes Added Successfully!!")

    this.note = {
      id: 0,
      title :'',
      description :'',
      category :'',
      date :'', 
      important: false 
    };
  }

}
