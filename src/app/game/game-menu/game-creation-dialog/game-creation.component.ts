import { Component, EventEmitter, Output } from '@angular/core';
import { GameCreationRequest } from './game-creation-request.model';

@Component({
  selector: 'game-creation',
  templateUrl: './game-creation.component.html'
})
export class GameCreationComponent {
  name: string;

  @Output() created = new EventEmitter<GameCreationRequest>();

  onCreate(): void {
    this.created.emit({
      name: this.name
    });
  }
}