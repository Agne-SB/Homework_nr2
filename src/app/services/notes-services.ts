import { Injectable } from '@angular/core';

interface Note { title: string; text: string; }

@Injectable({
  providedIn: 'root'
})
export class NotesServices {
  public notes: Note[] = [];

  constructor() {
    try {
      const raw = localStorage.getItem("notes");
      this.notes = raw ? (JSON.parse(raw) as Note[]) : [];
    } catch {
      this.notes = [];
      localStorage.removeItem("notes");
    }
  }

  private saveNotes(){
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  public addNote(title: string, text: string): void {
    const t = title.trim();
    const raw = text;
    if (!t || !raw.trim()) return;

    this.notes.unshift({ title: t, text: raw });
    this.saveNotes();
  }

  public deleteNote(i:number){
    this.notes.splice(i, 1);
    this.saveNotes();
  }
}
