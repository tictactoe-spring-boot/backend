import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './game-lobby.component.html'
})
export class GameLobbyComponent implements OnInit, OnDestroy {
  id: number;

  private sub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}