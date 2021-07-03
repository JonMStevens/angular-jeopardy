import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CategoryComponent } from './category/category.component';
import { ClueSquareComponent as ClueSquareComponent } from './clue-square/clue-square.component';
import { QuestionScreenComponent } from './question-screen/question-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CategoryComponent,
    ClueSquareComponent,
    QuestionScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
