import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../interfeices/vacancy';
import { VacancyService } from '../servisec/vacancy.service';

@Component({
  selector: 'app-vacancy-top10',
  templateUrl: './vacancy-top10.component.html',
  styleUrls: ['./vacancy-top10.component.css']
})

export class VacancyTop10Component implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit() {
    this.getTopVacancies();
  }

  private getTopVacancies() {
    this.vacancyService.getTopVacancies().subscribe(
      (vacancies: Vacancy[]) => this.vacancies = vacancies);
  }
}


