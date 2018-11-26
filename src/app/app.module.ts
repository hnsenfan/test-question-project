import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRouter } from './app.routing';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { StatisticComponent } from './statistic/statistic.component';
import { QuestionsData } from './questions/questions.data';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    ResultComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouter,
    HttpModule
  ],
  providers: [
    QuestionsData
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
