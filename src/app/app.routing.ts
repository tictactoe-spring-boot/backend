import { RouterModule, Routes } from '@angular/router';
import { GameMenuComponent } from './game/game-menu/game-menu.component';

const appRoutes: Routes = [
  {
    path: 'menu',
    component: GameMenuComponent
  },
  {
    path: '**',
    redirectTo: '/menu'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
