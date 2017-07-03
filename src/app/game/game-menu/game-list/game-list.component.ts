import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../game.model';
import { GameStatus } from '../../game-status.model';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent {
  GameStatus = GameStatus;
  @Input() games: Game[];
  @Output() gameSelected = new EventEmitter<Game>();

  onClick(game: Game): void {
    this.gameSelected.emit(game);
  }
}