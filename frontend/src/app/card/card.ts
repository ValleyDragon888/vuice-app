import { Component, signal } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  frontText = 'Front';
  backText = 'Back'

  flipCard(cardElement: HTMLElement): void {
    cardElement.classList.toggle('flipped'); // Toggle the flipped state
  }
}
