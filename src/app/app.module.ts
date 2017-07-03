import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { GameModule } from './game/game.module';
import { RequestOptions } from '@angular/http';
import { AppRequestOptions } from './app.request-option';

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
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: AppRequestOptions
    }
  ]
})
export class AppModule { }
