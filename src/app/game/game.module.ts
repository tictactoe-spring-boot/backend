import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GameService } from './game.service';
import { GameMenuModule } from './game-menu/game-menu.module';
import { GameLobbyModule } from './game-lobby/game-lobby.module';

@NgModule({
  imports: [
    HttpModule,
    GameMenuModule,
    GameLobbyModule
  ],
  declarations: [
  ],
  providers: [
    GameService
  ]
})
export class GameModule {}