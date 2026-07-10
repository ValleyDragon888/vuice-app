import { Component, signal } from '@angular/core';
import { FlashcardModel } from '../../../models';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  cardModel: FlashcardModel | undefined = undefined;

  flipCard(cardElement: HTMLElement): void {
    cardElement.classList.toggle('flipped'); // Toggle the flipped state
  }
}
