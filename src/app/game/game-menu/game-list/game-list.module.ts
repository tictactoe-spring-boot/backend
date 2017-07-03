import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameListComponent } from './game-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameListComponent
  ],
  exports: [
    GameListComponent
  ]
})
export class GameListModule { }
