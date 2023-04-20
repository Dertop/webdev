import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Vacancy } from '../interfeices/vacancy';
import { VacancyService } from '../servisec/vacancy.service';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})

export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy = {} as Vacancy;

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) { }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if ( _id ) {
        let vacancyId = +_id;
        this.vacancyService.getVacancy(vacancyId).subscribe(
          ( vacancy ) => this.vacancy = vacancy)
      }
    });
  }
}

