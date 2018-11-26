import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

// Service
import { QuestionsData} from '../questions/questions.data';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./../questions/questions.stylesheet.scss']
})
export class StatisticComponent implements OnInit {

    chart: Chart;
    @ViewChild('chart') htmlRef: ElementRef;

    constructor(
        private http: Http,
        private router: Router
        ) {
    }

    data: any = {};
    labels: any[] = [];
    avgScore: any[] = [];

    ngOnInit() {
        // Fetch data from statistic.json
        this.http.get(`http://localhost:4200/assets/statistic.json`)
        .subscribe((data) => {
            this.data = data.json();
            // Assign experience and average score to respective array to pass as the chart parameter
            const labels = this.data.stats.map(key => key.experience);
            const avgScore = this.data.stats.map(key => key.avgscore);

            this.chart = new Chart(this.htmlRef.nativeElement, {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                        data: avgScore,
                    backgroundColor: ['Red', 'Blue', 'Purple', 'Yellow', 'Green', 'Orange'
                    ],
                    hoverBackgroundColor: []
                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {
                      display: false
                    }
                  }
              });
        },
        (err) => alert('There is an issue while fetching the data. Please try again after a few minutes'));
    }

    startOver() {
        // Navigate to home to start over the question-answer process
        this.router.navigate(['app-home']);
    }

    result() {
        // Navigate to home to start over the question-answer process
        this.router.navigate(['app-result']);
    }
}
