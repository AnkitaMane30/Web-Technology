import { Component } from '@angular/core';
import { Note } from '../../models/note';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesServices } from '../../Services/notes-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-notes.html',
  styleUrl: './edit-notes.css',
})
export class EditNotes {
  note: Note ={
    id: 0,
    title:'',
    description:'',
    category:'',
    date:'',
    important:false
  }

  constructor(
    private route: ActivatedRoute, 
    private router:Router,
    private noteService:NotesServices
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const foundNote = this.noteService.getNoteById(id);

    if(foundNote){
      this.note = {...foundNote};
    }
  }

  updateNotes():void{
    this.noteService.updateNote(this.note);

    alert("Note updated Successfully");

    this.router.navigate(['/notes']);
  }

}
