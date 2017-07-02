import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { GameStatus } from '../game-status.model';

@Component({
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {
  games: Game[];

  GameStatus = GameStatus;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService
      .findAll()
      .subscribe(games => this.games = games)
  }
}