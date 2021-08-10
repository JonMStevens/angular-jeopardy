import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { GameComponent } from './game-components/game/game.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'end-screen', component: EndScreenComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
