import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddNotes } from '../Components/add-notes/add-notes';
import { Navbar } from '../Components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NotesManagementApp');
}
