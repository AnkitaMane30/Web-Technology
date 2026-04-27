import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesServices {

  notes:Note[] =[];

  constructor() {}

  getAllNotes() : Note[]{
    return this.notes;
  }

  addNotes(note: Note) : void{
    this.notes.push(note);
  }

  deleteNotes(id: Number) : void{
    this.notes = this.notes.filter(note => note.id !== id);
  }

  getNoteById(id: Number):Note | undefined{
    return this.notes.find(note => note.id === id);
  }

  updateNote(updateNote: Note) : void{
    const index = this.notes.findIndex(
      note => note.id === updateNote.id
    );
    if(index !== -1){
      this.notes[index] = updateNote;
    }
  }

}
