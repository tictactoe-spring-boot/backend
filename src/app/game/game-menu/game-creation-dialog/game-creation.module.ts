import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCreationComponent } from './game-creation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GameCreationComponent
  ],
  exports: [
    GameCreationComponent
  ]
})
export class GameCreationModule {}