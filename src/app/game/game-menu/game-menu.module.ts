import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameMenuComponent } from './game-menu.component';
import { GameListModule } from './game-list/game-list.module';
import { GameCreationModule } from './game-creation-dialog/game-creation.module';

@NgModule({
  imports: [
    CommonModule,
    GameListModule,
    GameCreationModule
  ],
  declarations: [
    GameMenuComponent
  ]
})
export class GameMenuModule {}