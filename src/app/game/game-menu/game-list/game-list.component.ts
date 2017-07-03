import { Component, Input } from '@angular/core';
import { Game } from '../../game.model';
import { GameStatus } from '../../game-status.model';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent {
  @Input() games: Game[];
  GameStatus = GameStatus;
}