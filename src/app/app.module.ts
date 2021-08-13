import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ClueSquareComponent as ClueSquareComponent } from './clue-square/clue-square.component';
import { QuestionScreenComponent } from './game-components/question-screen/question-screen.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game-components/game/game.component';
import { MenuComponent } from './menu/menu.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestartButtonComponent } from './restart-button/restart-button.component';
import { PlayerScorerComponent } from './player-scorer/player-scorer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoryatBoardComponent } from './coryat/coryat-board/coryat-board.component';
import { BoardFooterComponent } from './board-footer/board-footer.component';
import { CoryatScorerComponent } from './coryat/coryat-scorer/coryat-scorer.component';
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
    RestartButtonComponent,
    PlayerScorerComponent,
    CoryatBoardComponent,
    BoardFooterComponent,
    CoryatScorerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
