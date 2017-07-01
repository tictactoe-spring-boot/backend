import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameListModule } from './game-list/game-list.module';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    GameListModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
