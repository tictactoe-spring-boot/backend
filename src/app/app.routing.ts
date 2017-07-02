import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game/game-list/game-list.component';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: GameListComponent
  },
  {
    path: '**',
    redirectTo: '/menu'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
