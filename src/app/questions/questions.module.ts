import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { QuestionsComponent } from './questions.component';

export const routes = [
    { path: '', component: QuestionsComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes) ],

    declarations: [
        QuestionsComponent
    ]
})
export class QuestionsModule {
    static routes = routes;
}
