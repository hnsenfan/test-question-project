import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.stylesheet.scss']
})
export class HomeComponent {
  constructor(
    private router: Router
    ) {}

  getStarted(number) {
    this.router.navigate(['app-questions']);
  }
}
