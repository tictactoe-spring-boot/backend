import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { GameModule } from './game/game.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    GameModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
