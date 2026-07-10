import { Component, signal } from '@angular/core';
import { CardComponent } from './card/card';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights';

@Component({
  selector: 'app-root',
  imports: [CardComponent, TrafficLightsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  flipCard(cardElement: HTMLElement): void {
    cardElement.classList.toggle('flipped'); // Toggle the flipped state
  }
}
