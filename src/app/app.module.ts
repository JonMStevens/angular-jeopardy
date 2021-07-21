import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ClueSquareComponent as ClueSquareComponent } from './clue-square/clue-square.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestartButtonComponent } from './restart-button/restart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ClueSquareComponent,
    QuestionScreenComponent,
    PlayerComponent,
    GameComponent,
    MenuComponent,
    EndScreenComponent,
    PageNotFoundComponent,
    RestartButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
