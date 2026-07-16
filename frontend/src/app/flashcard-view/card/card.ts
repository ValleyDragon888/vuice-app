import { Component, input } from '@angular/core';
import { FlashcardModel } from '../../../models';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  cardModel = input.required<FlashcardModel>();

  flipCard(cardElement: HTMLElement): void {
    cardElement.classList.toggle('flipped'); // Toggle the flipped state
  }
}
