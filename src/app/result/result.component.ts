import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

// Service
import { QuestionsData} from '../questions/questions.data';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./../questions/questions.stylesheet.scss']
})
export class ResultComponent implements OnInit {

    chart: Chart;
    @ViewChild('chart') htmlRef: ElementRef;

    constructor(
        private router: Router,
        private questionsData: QuestionsData
        ) {
    }

    data: any = {};
    resultScore: any[] = [];
    questionData: any[] = [];
    answersData: any;
    checkboxData: any;
    scorePercentage: any;
    resultStatus: any;

    ngOnInit() {
        this.resultScore = this.questionsData.getData('resultScore');
        // Fetch data from questions.data.ts service and store
        this.answersData = this.questionsData.getData('answersList');
        this.questionData = this.questionsData.getData('questionsList');
        this.checkboxData = this.questionsData.getData('checkboxList');

        this.scorePercentage = this.resultScore[0] / this.questionData.length * 100;

        if (this.scorePercentage >= 70) {
            this.resultStatus = 'Pass';
        } else {
            this.resultStatus = 'Fail';
        }

        this.chart = new Chart(this.htmlRef.nativeElement, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: this.resultScore,
                backgroundColor: [
                    'rgb(0, 255, 0)',
                    'rgb(255, 77, 77)'
                ],
                hoverBackgroundColor: []
                }],
                labels: [
                'Correct',
                'False'
                ]
            },
            options: {
              cutoutPercentage: 0,
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                position: 'bottom'
              }
            }
          });

    }

    startOver() {
        // Navigate to home to start over the question-answer process
        this.router.navigate(['app-home']);
    }

    statistic() {
        // Navigate to home to start over the question-answer process
        this.router.navigate(['app-statistic']);
    }

}
