import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoryatBoardComponent } from './coryat/coryat-board/coryat-board.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { GameComponent } from './game-components/game/game.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameModeGuard } from './guards/game-mode.guard';
import { CoryatModeGuard } from './guards/coryat-mode.guard';
const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    canActivate: [GameModeGuard]
  },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'end-screen', component: EndScreenComponent },
  {
    path: 'coryat',
    component: CoryatBoardComponent,
    canActivate: [CoryatModeGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
