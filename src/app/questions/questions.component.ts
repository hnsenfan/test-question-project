import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

// Service
import { QuestionsData} from './questions.data';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.stylesheet.scss']
})
export class QuestionsComponent implements OnInit {

    constructor(
        private router: Router,
        private http: Http,
        private questionsData: QuestionsData
        ) {
    }

    data: any = {};
    questionData: any[] = [];
    currentPage: number;
    answer: any[] = [];
    correctAnswerCount = 0;
    lastCorrect: boolean;
    textForm: boolean;
    radioForm: boolean;
    checkboxValue: any[] = [];
    resultScore: any[] = [];

    ngOnInit() {
        // Fetch data from question.json
        this.http.get(`http://localhost:4200/assets/question.json`)
        .subscribe((data) => {
            this.data = data.json();
            this.questionData = data.json().questions;
            this.questionsData.setData('questionsList', this.questionData);
            this.currentPage = 1;
        },
        (err) => alert('There is an issue while fetching the data. Please try again after a few minutes'));
    }

    // Function for next button - to go to next page
    next() {
        if (this.questionData[this.currentPage - 1].correct_answer === this.answer[this.currentPage - 1]) {
            this.correctAnswerCount++; // To calculate how many matched correct answers
            this.lastCorrect = true; // To mark whether current answer correct or not
        } else {
            this.lastCorrect = false;
        }

        this.currentPage = this.currentPage + 1;
        this.questionsData.setData('answersList', this.answer);

        if (this.currentPage === this.questionData.length + 1) {
            this.resultScore = [this.correctAnswerCount, this.questionData.length - this.correctAnswerCount];
            this.questionsData.setData('resultScore', this.resultScore);
            this.router.navigate(['app-result']);
        }
    }

    // Function for previous button - to go to previous page
    previous() {
        if (this.lastCorrect) {
            this.correctAnswerCount--; // If last answered question is correct then correct answers count will be substracted
        }
        this.currentPage = this.currentPage - 1;
    }

    // Function to take up the data which values generated from checked checkbox
    selectCheckbox (e, option) {
        if (e.target.checked) {
          this.checkboxValue.push(option);
        } else {
          this.checkboxValue.splice(this.checkboxValue.indexOf(option), 1);
        }
        this.questionsData.setData('checkboxList', this.checkboxValue);
    }

}
