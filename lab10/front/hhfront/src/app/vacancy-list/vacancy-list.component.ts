import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../interfeices/vacancy';
import { VacancyService } from '../servisec/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})


export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit() {
    this.getVacancies();
  }


  getVacancies() {
    this.vacancyService.getVacancies().subscribe(
      ( vacancies: Vacancy[]) => this.vacancies = vacancies);
  }
}

