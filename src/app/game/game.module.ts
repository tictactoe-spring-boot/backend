import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GameService } from './game.service';
import { GameMenuModule } from './game-menu/game-menu.module';

@NgModule({
  imports: [
    GameMenuModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
    GameService
  ]
})
export class GameModule {}