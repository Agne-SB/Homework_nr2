import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AddNote} from './components/add-note/add-note';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddNote],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uzrasine');
}
