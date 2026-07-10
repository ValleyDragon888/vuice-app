import { Component, signal } from '@angular/core';

@Component({
  selector: 'traffic-lights',
  imports: [],
  templateUrl: './traffic-lights.html',
  styleUrl: './traffic-lights.css'
})
export class TrafficLightsComponent {
  frontText = 'Front';
  backText = 'Back'

  flipCard(cardElement: HTMLElement): void {
    cardElement.classList.toggle('flipped'); // Toggle the flipped state
  }
}
