import { Component, OnInit } from '@angular/core';
import { GameCreationRequest } from './game-creation-dialog/game-creation-request.model';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './game-menu.component.html'
})
export class GameMenuComponent implements OnInit {
  games: Game[];

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  private updateGameList(): void {
    this.gameService
      .findAll()
      .subscribe(games => this.games = games)
  }

  ngOnInit(): void {
    this.updateGameList();
  }

  onSubmit(gameCreation: GameCreationRequest): void {
    this.gameService
      .create(gameCreation)
      .subscribe(response => this.updateGameList());
  }

  onGameSelected(game: Game): void {
    let ignore = this.router.navigate(['/game', game.id]);
  }

}