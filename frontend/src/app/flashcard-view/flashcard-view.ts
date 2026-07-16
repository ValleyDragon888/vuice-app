import { Component, signal, ViewChild } from '@angular/core';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights';
import { CardComponent } from './card/card';
import { FlashcardModel } from '../../models';

@Component({
  selector: 'flashcard-view',
  imports: [TrafficLightsComponent, CardComponent],
  templateUrl: './flashcard-view.html',
  styleUrl: './flashcard-view.css'
})
export class FlashcardViewComponent {

  current_card: FlashcardModel = new FlashcardModel("front", "back");

}
