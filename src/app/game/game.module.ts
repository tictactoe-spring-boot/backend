import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GameService } from './game.service';
import { GameListModule } from './game-list/game-list.module';

@NgModule({
  imports: [
    GameListModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
    GameService
  ]
})
export class GameModule {}