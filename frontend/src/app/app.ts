import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { FlashcardViewComponent } from './flashcard-view/flashcard-view';
import { FlashcardModel, View, ViewType } from '../models';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [FlashcardViewComponent, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  tabs: View[] = [
    new View("flashcard", new FlashcardModel("FRONT", "BACK"))
  ];
  active_tab: number = 0;
}
