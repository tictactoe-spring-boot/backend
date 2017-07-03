import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameLobbyComponent } from './game-lobby.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameLobbyComponent
  ],
  exports: [
    GameLobbyComponent
  ]
})
export class GameLobbyModule {}