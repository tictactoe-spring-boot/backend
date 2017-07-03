import { RouterModule, Routes } from '@angular/router';
import { GameMenuComponent } from './game/game-menu/game-menu.component';
import { GameLobbyComponent } from './game/game-lobby/game-lobby.component';

const appRoutes: Routes = [
  {
    path: 'game-menu',
    component: GameMenuComponent
  },
  {
    path: 'game/:id',
    component: GameLobbyComponent
  },
  {
    path: '**',
    redirectTo: '/game-menu'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
