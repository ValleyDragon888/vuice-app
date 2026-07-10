import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { FlashcardViewComponent } from './flashcard-view/flashcard-view';
import { FlashcardModel } from '../models';

@Component({
  selector: 'app-root',
  imports: [FlashcardViewComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  @ViewChild(FlashcardViewComponent) flashcard_component!: FlashcardViewComponent;

  ngAfterViewInit() {
    this.flashcard_component.setFlashcard(new FlashcardModel("a", "b"))
  }
}
