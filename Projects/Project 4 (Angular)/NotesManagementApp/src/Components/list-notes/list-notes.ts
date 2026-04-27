import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { NotesServices } from '../../Services/notes-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './list-notes.html',
  styleUrl: './list-notes.css',
})
export class ListNotes {
  notes: Note[] = [];
  
  constructor(private noteServices : NotesServices){}

  ngOnInit() : void{
    this.notes = this.noteServices.getAllNotes();
  }

  deleteNotes(id:number) : void{
    this.noteServices.deleteNotes(id);
    this.notes = this.noteServices.getAllNotes();
  }

}
