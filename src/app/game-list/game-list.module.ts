import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list.component';
import { GameService } from './game.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    GameListComponent
  ],
  providers: [
    GameService
  ]
})
export class GameListModule { }
