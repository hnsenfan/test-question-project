import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full'},
    { path: 'app-home', component: HomeComponent},
    { path: 'app-questions', component: QuestionsComponent},
    { path: 'app-result', component: ResultComponent},
    { path: 'app-statistic', component: StatisticComponent},
];

@NgModule({
    imports : [
      RouterModule.forRoot( routes, { useHash: true }), ] ,
    exports : [ RouterModule ]
})

export class AppRouter { }
