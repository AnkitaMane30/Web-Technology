import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { ListStudents } from '../list-students/list-students';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home,ListStudents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyApp');
}
