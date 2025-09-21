import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NotesServices} from '../../services/notes-services';

interface Note { title: string; text: string; }

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css'
})
export class AddNote {
  public title = '';
  public text = '';

  get notes(): Note[] { return this.notesServices.notes; }
  get hasNotes(): boolean { return this.notes.length > 0; }

  constructor(private notesServices: NotesServices) {}

  public addNote(): void {
    const t = this.title.trim();
    const raw = this.text;
    if (!t || !raw.trim) return;

    this.notesServices.addNote(t, raw);
    this.title = '';
    this.text  = '';
  }

  public deleteNote(i: number): void {
    this.notesServices.deleteNote(i);
  }

}
